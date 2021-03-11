import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
     root: {
          '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
       },
     },
     container: {
       display: 'flex',
       flexWrap: 'wrap',
     },
     textField: {
       marginLeft: theme.spacing(1),
       marginRight: theme.spacing(1),
       width: 200,
     },
   }));     

interface FormValues {
     name: string;
     email: string;
     datetime: string;
};

const Reservation = () => {
     const classes = useStyles();
     const [name, setName] = useState<string>();
     const [email, setEmail] = useState<string>();
     const [datetime, setDate] = useState<string>();
     const { register, handleSubmit } = useForm<FormValues>();
     const onSubmit = async (data: FormValues) => 
     {
          setName(data.name);
          setEmail(data.email);
          setDate(data.datetime);
     };
     return (
          <div>
             <h3>Reserve your table for food oders!</h3>
             <Button variant="contained" color="primary" href="/">
               Go Back
             </Button>
             <form className={classes.container} noValidate onSubmit={handleSubmit(onSubmit)}>
               <TextField margin="dense" name="name" id="name" label="Your Name" type="text"
               inputRef={register}
               variant="outlined" />
               <TextField margin="dense" name="email" id="email" label="Email Address" type="email"  
               inputRef={register}
               variant="outlined"/>
               <TextField
               id="datetime-local"
               name="datetime"
               inputRef={register}
               label="Reservation time"
               type="datetime-local"
               defaultValue="2021-03-01T10:30"
               className={classes.textField}
               fullWidth
               InputLabelProps={{
               shrink: true,
               }}
               />
               {/* <input name="fullName" ref={register} />
               <input name="email" type="email" ref={register} />
               <input name="datetime" ref={register} /> */}
               <Button 
               variant="contained"
               type="submit"
               >Submit</Button>
             </form>
             {name && <div>Submitted name: {name}</div>}
             {email && <div>Submitted email: {email}</div>}
             {datetime && <div>Submitted datetime: {datetime}</div>}
          </div>
     )
}

export default Reservation