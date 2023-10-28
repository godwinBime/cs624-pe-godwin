import React, {Component} from  'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import Heading from  './Heading'
import Input from  './Input'
import Button from  './Button' 
import TodoList from  './TodoList'
import TabBar from  './TabBar'

let todoIndex = 0 

class App extends Component{
  constructor(){
    super() 
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }     
    this.toggleComplete = this.toggleComplete.bind(this) 
    this.deleteTodo = this.deleteTodo.bind(this) 
    this.setType = this.setType.bind(this)
    this.submitTodo = this.submitTodo.bind(this) 
  }


  inputChange(inputValue){
    // console.log('Input Value: ', inputValue) 
    this.setState({inputValue}) 
  }

  submitTodo(){
    if (this.state.inputValue.match(/^\s*$/)){
      return
    }

    let todo = {
      title: this.state.inputValue,
      todoIndex: todoIndex,
      compplete: false
    }
    todoIndex++ 
    this.state.todos.push(todo)
    //const todos = [...this.state.todos, todo] 
    this.setState({todos: this.state.todos, inputValue: ''}, () => {
      console.log('State: ', this.state) 
    }) 
  }

  deleteTodo(todoIndex){
    let {todos} = this.state
    todos = this.state.todos.filter((todo) => {
      return todo.todoIndex !== todoIndex
    })
    this.setState({todos})
  }

  toggleComplete(todoIndex){
    let {todos} = this.state
    todos.forEach((todo) => {
      if(todo.todoIndex === todoIndex){
        todo.compplete = !todo.compplete
      }
    })
    this.setState({todos})
  }

  setType(type){
    this.setState({type})
  }

  render(){
    const {todos, inputValue, type} = this.state
    return(
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading/>
          <Input
          inputValue={inputValue}
          inputChange={(text) => this.inputChange(text)}/>
          <TodoList 
          type={type}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
          todos={todos}/>
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
        <TabBar type={type} setType={this.setType}/>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1    
  }
}) 

export default App 