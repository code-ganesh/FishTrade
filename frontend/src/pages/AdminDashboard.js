import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { db, auth } from '../firebase/firebaseConfig';

import AdminDashboardOverview from '../components/admin/AdminDashboardOverview';
import AdminNotifications from '../components/admin/AdminNotifications';
import PendingFishermenList from '../components/admin/PendingFishermenList';
import ApprovedFishermenList from '../components/admin/ApprovedFishermenList';
import TransactionHistory from '../components/admin/TransactionHistory';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [pendingFishermen, setPendingFishermen] = useState([]);
  const [approvedFishermen, setApprovedFishermen] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  // Use environment variable for Create React App
  const appId = process.env.REACT_APP_FIREBASE_APP_ID;

  if (!appId) {
    console.error("❌ Missing REACT_APP_FIREBASE_APP_ID. Please define it in your .env file.");
  }

  // --- Authentication Listener ---
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUserId(user.uid);
        console.log("Admin Dashboard: Firebase Auth Ready. User ID:", user.uid);
      } else {
        setCurrentUserId(null);
        console.log("Admin Dashboard: Firebase Auth Ready. No user signed in.");
      }
      setIsAuthReady(true);
    });

    return () => unsubscribeAuth();
  }, []);

  // --- Firestore Data Listeners ---
  useEffect(() => {
    if (!isAuthReady || !appId) return;

    // Listener for Pending Fishermen
    const pendingRef = collection(db, `artifacts/${appId}/public/data/pendingFishermen`);
    const unsubPending = onSnapshot(query(pendingRef), snapshot => {
      setPendingFishermen(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      console.log("Fetched pending fishermen");
    }, (error) => {
      console.error("Error fetching pending fishermen:", error);
    });

    // Listener for Approved Fishermen
    const approvedRef = collection(db, `artifacts/${appId}/public/data/users`);
    const unsubApproved = onSnapshot(
      query(approvedRef, where('role', '==', 'fisherman'), where('status', '==', 'approved')),
      snapshot => {
        setApprovedFishermen(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        console.log("Fetched approved fishermen");
      }, (error) => {
        console.error("Error fetching approved fishermen:", error);
      }
    );

    // Listener for Transactions
    const txRef = collection(db, `artifacts/${appId}/public/data/transactions`);
    const unsubTx = onSnapshot(query(txRef), snapshot => {
      setTransactions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      console.log("Fetched transactions");
    }, (error) => {
      console.error("Error fetching transactions:", error);
    });

    // Cleanup listeners on unmount
    return () => {
      unsubPending();
      unsubApproved();
      unsubTx();
    };
  }, [isAuthReady, appId]);

  // --- Admin Actions ---
  const approveFisherman = async (fishermanId) => {
    try {
      if (!isAuthReady || !currentUserId) {
        console.warn("Authentication not ready or user not logged in. Cannot approve fisherman.");
        return;
      }

      const pendingRef = doc(db, `artifacts/${appId}/public/data/pendingFishermen`, fishermanId);
      const userRef = doc(db, `artifacts/${appId}/public/data/users`, fishermanId);

      // Update the status to 'approved'
      await updateDoc(userRef, {
        status: 'approved',
        approvedAt: new Date().toISOString(),
      });
      console.log(`User ${fishermanId} status updated to approved.`);

      // Remove from pending fishermen collection
      await deleteDoc(pendingRef);
      console.log(`Fisherman ${fishermanId} approved and removed from pending list.`);
    } catch (error) {
      console.error("Error approving fisherman:", error);
    }
  };

  const rejectFisherman = async (fishermanId) => {
    try {
      if (!isAuthReady || !currentUserId) {
        console.warn("Authentication not ready or user not logged in. Cannot reject fisherman.");
        return;
      }

      const pendingRef = doc(db, `artifacts/${appId}/public/data/pendingFishermen`, fishermanId);
      const userRef = doc(db, `artifacts/${appId}/public/data/users`, fishermanId);

      // Update the status to 'rejected'
      await updateDoc(userRef, {
        status: 'rejected',
        rejectedAt: new Date().toISOString(),
      });
      console.log(`User ${fishermanId} status updated to rejected.`);

      // Remove from pending fishermen collection
      await deleteDoc(pendingRef);
      console.log(`Fisherman ${fishermanId} rejected and removed from pending list.`);
    } catch (error) {
      console.error("Error rejecting fisherman:", error);
    }
  };

  // --- Calculate Overview Stats ---
  const totalFishermen = approvedFishermen.length;
  const pendingApprovals = pendingFishermen.length;
  const totalTransactions = transactions.length;
  const totalRevenue = transactions.reduce((sum, txn) => sum + (txn.amount || 0), 0);

  // --- Render Content Based on Active Tab ---
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <AdminNotifications pendingFishermen={pendingFishermen} />
            <AdminDashboardOverview
              totalFishermen={totalFishermen}
              pendingApprovals={pendingApprovals}
              totalTransactions={totalTransactions}
              totalRevenue={totalRevenue.toLocaleString()}
            />
          </>
        );
      case 'Pending Approvals':
        return (
          <PendingFishermenList
            pendingFishermen={pendingFishermen}
            onApprove={approveFisherman}
            onReject={rejectFisherman}
          />
        );
      case 'Approved Fishermen':
        return <ApprovedFishermenList approvedFishermen={approvedFishermen} />;
      case 'Transactions':
        return <TransactionHistory transactions={transactions} />;
      default:
        return <p className="text-gray-600 text-center">Select a tab to view content.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Admin Dashboard
        </h1>

        {/* Navigation Tabs */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
            {['Overview', 'Pending Approvals', 'Approved Fishermen', 'Transactions'].map((tab) => (
              <button
                key={tab}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300
                  ${activeTab === tab
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'}
                `}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {!isAuthReady ? (
            <div className="text-center text-lg text-gray-600 p-10">
              Loading dashboard... Please wait for Firebase authentication.
            </div>
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
