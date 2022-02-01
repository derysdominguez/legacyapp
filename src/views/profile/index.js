import React from 'react';
import { auth } from '../../config/firebaseconfig';

export default function Index() {
  return <>
    <h1>Hello from your profile</h1>
    <button onClick={() => auth.signOut()}>Sign Out</button>
  </>;
}
