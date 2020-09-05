import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles} from "@material-ui/core/styles";

import firebase from "../firebase";
import TopHeader from "../components/topPage/topHeader";
import {TitleData} from "../types/types";

const useStyles = makeStyles(() =>
  createStyles({
      main: {
          textAlign: "center",
          marginTop: "80px",
      },
      tileImage: {
        height: "436px",
        width: "436px"
      },
  })
)

const DownloadPage: FC = () => {
    const { keyword } = useParams();
    const classes = useStyles();
    const [data, setData] = useState<TitleData[]>([]);
    
    const getData = async (searchWord: string | undefined) => {
        const db = firebase.firestore();
        const titleDataRef = db.collection("titleData");
        const searchedData = titleDataRef.where("title", "==", searchWord);
        const snapShot = await searchedData.get();
        const temporaryData: object[] = [];
        
        snapShot.docs.map(doc => {
            temporaryData.push(doc.data());
        })
        
        setData(temporaryData as TitleData[]);
            
    }
    
    useEffect(() => {
        getData(keyword);
        console.log(keyword);
    }, []);
    
    const displayImage = () => {
      return(
        <div>
          {data.map((title) => (
            <div>
              <img className={classes.tileImage} src={title.image} alt={title.title} />
            </div>
          ))}
        </div>
      )
    }
    const downloadButton = () => {
      return(
        <div>
          {data.map((title) => (
            <Button
              variant="contained"
              href={title.downloadUrl}
            >
              ダウンロードする
            </Button>
          ))}
        </div>
      )
    }
    
    return(
      <div>
        <TopHeader/>
        <div className={classes.main}>
          {displayImage()}
          {downloadButton()}
        </div>
      </div>
    )
}

export default DownloadPage;