// const CoreValues =[{
//     title: "Integrity",
//     description: "We  uphold the highest standards of integrity in all of our actions.",
// },{
//     title: "Innovation",
//     description: "We  pursue innovation that matters, creating solutions that drive progress and make a difference.",
// }]


const config = (data, incrementer) => {
  return resizeBy.status(200).json({
    success: true,
    message: "Configuration set successfully",
    config: {
      dataLimit: data,
      versionIncrementer: incrementer
    }
  });
  
}


 config(5000000, 2);