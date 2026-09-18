B.D. Bajar Billing - Multi User
================================

WHAT CHANGED
- Added Email/Password login.
- Added new shop/user registration.
- Every billing page uses users/{FirebaseAuthUID}/...
- User A cannot read User B's data when Firebase rules below are installed.
- Existing Billing/Stock/Return/Summary/Reprint pages are retained.

IMPORTANT FIREBASE SETUP
1. Open Firebase Console for project order-tracking-d18f5.
2. Authentication > Sign-in method > enable Email/Password.
3. Project settings > Your apps > Web app. Copy the Firebase Web configuration.
4. Open firebase-config.js and replace YOUR_API_KEY with the Web API Key. If Firebase gives different authDomain/projectId/storageBucket values, replace those too.
5. Realtime Database > Rules: paste firebase-rules.json and publish.
6. Deploy all files together. Do not open the old pages from an old deployment; use index.html first.

DATA LOCATION
users/{UID}/profile
users/{UID}/bills
users/{UID}/payments
users/{UID}/stocks
users/{UID}/customers
users/{UID}/customerBills
users/{UID}/returns
users/{UID}/returnBills
users/{UID}/returnStock
users/{UID}/cashBook

OLD DATA
The old root-level data (bills, stocks, customers, etc.) is NOT automatically migrated.
Make a backup before migration. If you want, a separate migration script can be made after confirming the desired owner account.

NOTE
The login system requires Firebase Authentication. A databaseURL alone is not enough for secure multi-user login.
