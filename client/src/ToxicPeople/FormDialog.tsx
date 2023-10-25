import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type FormDialogProps = {
  Title: string;
};

export default function FormDialog({ Title }: FormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [toxicFact, setToxicFact] = React.useState('');
  const [toxicTraits, setToxicTraits] = React.useState('');
  const [imagePath, setImagePath] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          marginRight: '20px',
          height: '40px',
          fontSize: '20px',
          padding: '25px',
          backgroundColor: 'maroon',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        }}
      >
        {Title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          padding: '100px',
          backgroundColor: 'maroon',
        }}
      >
        <DialogContent
          sx={{
            backgroundColor: 'gray',
          }}
        >
          <DialogTitle>Add More Toxic People!</DialogTitle>
          <DialogContentText>
            To add a toxic person to the collection, simply fill out these 4
            fields!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Most toxic trait"
            type="email"
            fullWidth
            variant="standard"
            value={toxicFact}
            onChange={(e) => setToxicFact(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="More toxic traits"
            type="email"
            fullWidth
            variant="standard"
            value={toxicTraits}
            onChange={(e) => setToxicTraits(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Link to an image of this toxic person"
            type="email"
            fullWidth
            variant="standard"
            value={imagePath}
            onChange={(e) => setImagePath(e.target.value)}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}