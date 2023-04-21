import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, Body, Right} from 'native-base';
import Card from './Parts/Card';
import Empty from './Parts/Empty';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';

function Item({title, id, price}) {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      <ListItem>
        <TouchableOpacity>
          <Icon
            onPress={() => {
              dispatch(deleteTransaction(id));
            }}
            name="delete"
            size={30}
            color="tomato"
          />
        </TouchableOpacity>

        <Body>
          <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 14,
              fontWeight: '400',
              color: price > 0 ? '#009BFC' : '#ff4500',
            }}>
            {price > 0 ? `${price} Kyats` : `${Math.abs(price)} Kyats`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  console.log(transactions);
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card navigation={navigation} />
      </Animated.View>

      <View style={{flex: 1, marginTop: -240}}>
        {transactions.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
          />
        ) : (
          <Empty />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;
