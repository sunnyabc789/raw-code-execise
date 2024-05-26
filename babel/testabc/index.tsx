import React, { useEffect, useState, useContext } from 'react';

const RenderInnerTable = (props) => {

  return (
    <div className='tableContent'>
      <div className='controlBar'>
        <div className='tableOptions'>
          <div className='batchOptionPos'>
            <Button
              data-autolog={VersionDetailNewContextCurrentLeftMenu ? `text=${VersionDetailNewContextCurrentLeftMenu?.flowNodeName}-新增渠道` : null}
              type='primary'
            >
              新增efg
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default alksdfj;
