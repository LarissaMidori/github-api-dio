import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories =  () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                name="components-react-dio" 
                linkToRepo="https://github.com/LarissaMidori/components-react-dio"
                fullName="LarissaMidori/components-react-dio" 
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                name="hc2-desafio-final" 
                linkToRepo="https://github.com/LarissaMidori/hc2-desafio-final"
                fullName="LarissaMidori/hc2-desafio-final" 
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories;
