import { useEffect, useState } from 'react';
import OptionSelected from '../components/options/OptionSelected'
import  DUMMYOPTIONS from '../lib/constansts'
import { useParams } from 'react-router-dom';
import withLayouts from '../HOC/withLayouts'

const SelectedOption = () => {
    const { option } = useParams();
    const paramsId = parseInt(option)

    const optionId =  DUMMYOPTIONS.find((option) => option.id === paramsId);

    return (
        <>
            <OptionSelected option={optionId}/>
        </>
    )
}

export default withLayouts(SelectedOption)

