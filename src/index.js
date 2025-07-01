import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./assets/css/global.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { ClerkProvider, useAuth } from "@clerk/clerk-react"
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
              <Theme appearance="light">
                  <App />
              </Theme>
          </ConvexProviderWithClerk>
      </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
