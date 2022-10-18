function main(args) {
  let name = args.name || 'Stanislav'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return {"body": greeting}
}
  
