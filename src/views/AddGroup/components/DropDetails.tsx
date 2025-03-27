// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Collapsible from 'react-native-collapsible';

// const DropdownComponent = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <View style={styles.container}>
//       {/* 主标题 */}
//       <TouchableOpacity style={styles.header} onPress={toggleCollapse}>
//         <Text style={styles.headerText}>
//           {isCollapsed ? '▶' : '▼'} 车库的NVR套装
//         </Text>
//       </TouchableOpacity>

//       {/* 折叠部分 */}
//       <Collapsible collapsed={isCollapsed}>
//         <View style={styles.content}>
//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.itemText}>+ 我书房的摄像机</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.itemText}>+ 我书房的摄像机</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.itemText}>+ 我书房的摄像机</Text>
//           </TouchableOpacity>
//         </View>
//       </Collapsible>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     margin: 20,
//   },
//   header: {
//     backgroundColor: '#f2f2f2',
//     padding: 15,
//     borderRadius: 5,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   content: {
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   item: {
//     padding: 10,
//   },
//   itemText: {
//     fontSize: 14,
//   },
// });

// export default DropdownComponent;

const DropdownComponent = () => {
};

export default DropdownComponent;
