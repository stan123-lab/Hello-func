function main(args) {
  let name = args.name || 'Emi'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return {"body": greeting}
}
  
