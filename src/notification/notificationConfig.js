import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import notifee from '@notifee/react-native';

const Notification = () => {
  const notificationConfig = () => {
    const channelId = async () => {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
    };

    const displayNotification = async () => {
      await notifee.displayNotification({
        title: 'Hello, world!',
        body: 'This is a notification!',
        android: {
          channelId: channelId,
        },
      });
    };

    return (
      <View>
        <TouchableOpacity onPress={displayNotification}>
          <Text>Display Notification</Text>
        </TouchableOpacity>
      </View>
    );
  };
};

export default Notification;
