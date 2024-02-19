import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container } from "../globalStyled/GlobalStyled";

import { filtersChanged } from "./slices/filterSlice";
import { searchStringChanged } from "./slices/searchSlice";

import { selectActiveFilter } from "./slices/filterSlice";

const FilterHeroesBlock = styled.div`
  margin-top: 134px;
  box-sizing: border-box;
  width: 100%;
  height: 108px;
  padding: 34px 41px 31px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.7);
`;

const FilterHeroesTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 426px) {
    font-size: 15px;
  }
`;

const AtributeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 44px;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

const AtributeTitle = styled.h3`
  color: #9c9c9c;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 426px) {
    font-size: 0.9rem;
  }
`;

const AtributeIcon = styled.img`
  display: inline;
  max-width: 50px;
  cursor: pointer;
  filter: brightness(0.5) saturate(0);
  transition: all 0.5s;
  &.active {
    filter: none;
  }
  @media (max-width: 426px) {
    max-width: 30px;
  }
`;

const Search = styled.input`
  border: none;
  width: 24%;
  height: 95%;
  box-sizing: border-box;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: 500;

  &:focus {
    outline: none;
  }

  @media (max-width: 426px) {
    height: 70%;
  }
`;

const FilterHeroes = ({ filters }) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  useEffect(() => {
    dispatch(searchStringChanged(""));
  }, []);

  return (
    <Container>
      <FilterHeroesBlock>
        <FilterHeroesTitle>FILTER HEROES</FilterHeroesTitle>
        <AtributeBlock>
          <AtributeTitle>ATTRIBUTE</AtributeTitle>
          {filters.map((filter) => {
            return (
              <AtributeIcon
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-${filter}-active.png`}
                key={uuid()}
                className={activeFilter === filter ? "active" : null}
                onClick={() => dispatch(filtersChanged(filter))}
              />
            );
          })}
        </AtributeBlock>
        <Search
          placeholder="Search..."
          onChange={(e) => dispatch(searchStringChanged(e.target.value))}
        />
      </FilterHeroesBlock>
    </Container>
  );
};

export default FilterHeroes;
