import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

// Reusable component for each transaction row
const TransactionItem = ({ imageSource, title, subtitle, amount }) => {
  return (
    <View className='flex-row justify-between items-center my-3'>
      <View className='flex-row items-center'>
        <View className='bg-white p-3 rounded-full'>
          <Image className='h-10 w-10' source={imageSource} />
        </View>
        <View className='ml-3'>
          <Text className='font-bold text-[15px]'>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
      <Text className='text-[#d56568]'>{amount}</Text>
    </View>
  );
};

const BottomOption = () => {
  return (
    <ScrollView>
      <View className='m-5'>
        {/* Reusable component for each transaction */}
        <TransactionItem
          imageSource={require('../assets/Images/topup.png')}
          title="Topup"
          subtitle="Yesterday-17-12"
          amount="Rs:4000"
        />
        <Image className='w-[320px] h-[2px] bg-gray-200' source={require('../assets/Images/line.png')} />

        <TransactionItem
          imageSource={require('../assets/Images/moneywithdrawal.png')}
          title="Withdraw"
          subtitle="Yesterday-17-12"
          amount="Rs:4000"
        />
        <Image className='w-[320px] h-[2px] bg-gray-200' source={require('../assets/Images/line.png')} />

        <TransactionItem
          imageSource={require('../assets/Images/donation1.png')}
          title="Donate"
          subtitle="Yesterday-17-12"
          amount="Rs:4000"
        />
        <Image className='w-[320px] h-[2px] bg-gray-200' source={require('../assets/Images/line.png')} />

        <TransactionItem
          imageSource={require('../assets/Images/moneywithdrawal.png')}
          title="Withdraw"
          subtitle="Yesterday-17-12"
          amount="Rs:4000"
        />
        <Image className='w-[320px] h-[2px] bg-gray-200' source={require('../assets/Images/line.png')} />
        <TransactionItem
          imageSource={require('../assets/Images/moneywithdrawal.png')}
          title="Withdraw"
          subtitle="Yesterday-17-12"
          amount="Rs:4000"
        />
        <Image className='w-[320px] h-[2px] bg-gray-200' source={require('../assets/Images/line.png')} />
      </View>
    </ScrollView>
  );
};

export default BottomOption;
