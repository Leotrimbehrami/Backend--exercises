//import express from "express"
const express = require('express')

const app = express()
const port = 3000

app.get('/hello', (req,res) => {
  res.send('Hallo hier ist ein Text')
})

app.get('/time', (req,res) => {
  const date = new Date()
  const time = date.toISOString()
  res.send(time)
});

app.get('/random', (req,res) => {
  const zahl = Math.floor(Math.random() * 10)
  res.send(`random number:  ${zahl}`)
  
})

app.get('/isNumber/:value', (req,res) => {
  const value = req.params.value
  console.log(typeof value);

  if (isNaN(Number(value))) {
    res.send("This is not a Number")
  } else {
    res.send('This is a Number')
  }
})

app.listen(port, () => {
  console.log("The server is listening")
})