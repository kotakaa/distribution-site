import React, {FC, useState} from 'react';
import pencil from "../../assets/images/pencil.jpg"
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Search from '@material-ui/icons/Search'


const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${pencil})`,
    backgroundSize: "cover",
    height: "100vh"
  },
  paper: {
    position: "relative",
    top: "33%",
    margin: "auto",
    width: "45%"
  },
  input: {
    width: "80%"
  }
})
const TopMain: FC = () => {
  const classes = useStyles();
  const [keyword, setKeyWord] = useState("");
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value)
  }

  const handleSubmit = () => {
    history.push("/search/" + keyword)
  }
  return(
    <div className={classes.background}>
      <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
        <IconButton type="submit">
          <Search />
        </IconButton>
        <InputBase 
          className={classes.input}
          placeholder="検索するワードを入力してください"
          onChange={handleChange}
          />
      </Paper>
    </div>
  )
}

export default TopMain;