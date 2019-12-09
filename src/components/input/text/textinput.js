import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import "./textinput.css";

class TextInput extends Component {
  render() {
    return (
      <div className={this.props.textInputClassName}>
        <p className="">{this.props.textInputLabel}</p>
        <Input type="text" />
      </div>
    );
  }
}

export default TextInput;

// export default function InputWithIcon() {
//   const classes = useStyles();

//   return (
//     <div>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
//         <Input
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="middle">
//               <AccountCircle />
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//     </div>
//   );
// }
