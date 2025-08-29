// const Data = () => {
//   let names = ["Ali", "Ahmad", "Anwar"];
//   return (
//     <div>
//       {names.map((d, index) => (
//         <li key={index}>{d}</li>
//       ))}
//     </div>
//   );
// };

// export default Data;

// const Data = () => {
//   let tasks = [
//     { id: "1", task: "Math ch : 4",time:"9am", completed: true },
//     { id: "2", task: "Urdu ch : 4",time:"9am", completed: false },
//     { id: "3", task: "OOP ch : 4",time:"9am", completed: true },
//     { id: "4", task: "English ch : 4",time:"9am", completed: true },
//     { id: "5", task: "DSA ch : 4", time:"9am",completed: false },
//     { id: "6", task: "Islamiyat ch : 4",time:"9am", completed: true },
//   ];

//   const completedTasks = tasks.filter((t) => t.completed);
//   const pendingTasks = tasks.filter((t) => !t.completed);

//   return (
//     <div>
//       <h2 style={{ color: "green" }}>✅ Completed Tasks</h2>
//       <ul style={{border:"solid black 2px",padding:"10px"}}>
//         {completedTasks.map((t) => (
//           <li key={t.id}>{t.task}<br/>Time is :{t.time}</li>
//         ))}
//       </ul>

//       <h2 style={{ color: "red" }}>❌ Pending Tasks</h2>
//       <ul style={{border:"solid black 2px",padding:"10px"}}>
//         {pendingTasks.map((t) => (
//           <li key={t.id}>{t.task}<br/>Time is:{t.time}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Data;

const Data = () => {
  let tasks = [
    { id: "1", task: "Math ch : 4", completed: true },
    { id: "2", task: "Urdu ch : 4", completed: false },
    { id: "3", task: "OOP ch : 4", completed: false },
    { id: "4", task: "English ch : 4", completed: true },
    { id: "5", task: "DSA ch : 4", completed: false },
    { id: "6", task: "Islamiyat ch : 4", completed: true },
  ];
  return (
    <div>
      {" "}
      {tasks.map((t) =>
        t.completed ? (
          <li style={{ color: "green" }} key={t.id}>
            {t.task}
          </li>
        ) : (
          <li style={{ color: "red" }} key={t.id}>
          
            {t.task}
          </li>
        )
      )}
    </div>
  );
};

export default Data;