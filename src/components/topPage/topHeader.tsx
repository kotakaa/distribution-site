import React, {FC} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';


const TopHeader: FC = () => {
  return(
    <AppBar>
      <ToolBar>
        <h2>無料素材ダウンロード</h2>
      </ToolBar>
    </AppBar>
  )
}

export default TopHeader;
