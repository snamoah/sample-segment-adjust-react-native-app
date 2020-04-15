import React, { useEffect } from 'react';
import analytics from '@segment/analytics-react-native';
import Adjust from '@segment/analytics-react-native-adjust';
import { StyleSheet, Text, View } from 'react-native';

const WRITE_KEY = '<WRITE_KEY>';

export const loadSegment = async () => {
  await analytics.setup(WRITE_KEY, {
    using: [Adjust],
    /* 
    These two should alway be false, otherwise segment 
    in background will trigger some events automatically:
    https://segment.zendesk.com/hc/en-us/requests/361126?page=1
    */
    flushAt: 1,
    trackAttributionData: true,
    recordScreenViews: false,
    trackAppLifecycleEvents: true,
  });
};

export default function App() {

  useEffect(() => {
    loadSegment();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
