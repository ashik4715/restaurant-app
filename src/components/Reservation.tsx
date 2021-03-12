import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
     person: string;
};

const Reservation = () => {
     const classes = useStyles();
     const [name, setName] = useState<string>();
     const [email, setEmail] = useState<string>();
     const [datetime, setDate] = useState<string>();
     const { register, handleSubmit } = useForm<FormValues>();
     
     const [postId, setPostId] = useState(null);
     // selector
     const [person, setPerson] = useState<string>('');

     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setPerson(event.target.value as string);
     };
     // end selector
     const onSubmit = async (data: FormValues) => 
     {
          setName(data.name);
          setEmail(data.email);
          setDate(data.datetime);
          setPerson(data.person);
          console.log(data.person);
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => setPostId(data.id))
          .catch((error) => {
            console.error('Error:', error);
          });
     };
     return (
          <div>
             <h4>Reserve your table for food oders!</h4>
             <Button variant="contained" color="primary" href="/">
               Cancel
             </Button>
             <form className={classes.container} noValidate onSubmit={handleSubmit(onSubmit)}>
               <TextField margin="dense" name="name" id="name" label="Your Name" type="text"
               inputRef={register}
               fullWidth
               variant="outlined" />
               <TextField margin="dense" name="email" id="email" label="Email Address" type="email"  
               inputRef={register}
               fullWidth
               variant="outlined" />
               <TextField
               id="datetime-local"
               name="datetime"
               inputRef={register}
               fullWidth
               label="Reservation time"
               type="datetime-local"
               defaultValue="2021-03-01T10:30"
               className={classes.textField}
               InputLabelProps={{
               shrink: true,
               }}
               />
              <TextField id="select" label="Table for" 
              inputRef={register}
              name="person"
              value={person}
              onChange={handleChange}
              fullWidth select>
                <MenuItem value="1">1 Guest</MenuItem>
                <MenuItem value="2">2 Guests</MenuItem>
                <MenuItem value="3">3 Guests</MenuItem>
                <MenuItem value="4">4 Guests</MenuItem>
                <MenuItem value="5">5 Guests</MenuItem>
                <MenuItem value="6">6 Guests</MenuItem>
              </TextField>
               <Button 
               variant="contained" color = "secondary"
               type="submit"
               fullWidth
               >Submit</Button>
             </form>
             {name && <div>Submitted name: {name}</div>}
             {email && <div>Submitted email: {email}</div>}
             {datetime && <div>Submitted datetime: {datetime}</div>}
             {person && <div>Selects guests: {person}</div>}
             {<div>Fetch API Returned Id: {postId}</div>}

          </div>
     )
}

export default Reservation