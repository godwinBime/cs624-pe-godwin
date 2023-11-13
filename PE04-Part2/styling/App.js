import { Component } from 'react';
import {Image, Text, View, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const userImage = require('./assets/user.png');

const data = [{
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
  showThumbnail: true
}];

const ProfileCard = (props) => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer]
  let cool = [styles.cardContainer]

  if(showThumbnail){
    containerStyles.push(styles.cardThumbnail);
  }
  if(showThumbnail){
    cool.push(styles.cardThumbnail);
  }

  return(
    <View style={[styles.container]}>
      <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[containerStyles]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight> 

       <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[cool]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight>

       <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[containerStyles]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight>

       <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[containerStyles]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight>
       <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[containerStyles]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight>
       <TouchableHighlight onPress={onPress} style={styles.tCard} > 
          <View style={[containerStyles]}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage} source={image}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                {name}
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                {occupation}
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                {description}
              </Text>
            </View>
          </View>
       </TouchableHighlight>
    </View>        
  )
};


ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });    
  }

  render(){
    const list = this.state.data.map(function(item, index){
      const {image, name, occupation, description, showThumbnail} = item;
      return (
        <ProfileCard key={'card-' + index} 
              image={image}
              name={name}
              occupation={occupation}
              description={description}
              onPress={this.handleProfileCardPress.bind(this, index)}
              showThumbnail={showThumbnail}/>                    
      )      
    }, this);

    return(   
      <View >           
          {list}                    
      </View> 
    )
  }
}

const WrapCardsContainer = (props) => {
  return(
    <View style={[styles.wrapCardsContainer, props.style]}>
      {props.children}
    </View>
  )
}

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
  tCard:{
    width: 130,
    padding: -20
  },

  wrapCardsContainer:{   
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'wrap',   
    margin: 2,
    width: 100,
    height: 100,
    flex: 1   
  },
  container: {
    margin: 50,    
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: profileCardColor,
    borderRadius: 20,
    width: 150,
    height: 200,
    ...Platform.select({
      ios:{
        shadowColor: 'black',
        textShadowOffset:{
          height: 10
        },
        shadowOpacity: 1
      },
      android:{
        elevation: 15
      }
    })
  },
  cardImageContainer:{
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 60,
    marginTop: 10,
    paddingTop: 5,
    ...Platform.select({
      ios:{
        shadowColor: 'black',
        textShadowOffset:{
          height: 10,
        },
        shadowOpacity: 1
      },
      android:{
        borderWidth: 3,
        borderColor:'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 30,
    height: 30
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset:{
      height: 2,
      width: 2
    },
    textShadowRadius: 3   
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    margin: 10,
    fontSize: 10
  },
  cardThumbnail:{
    transform: [{scale: 0.2}]
  }
})