import React, { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../hooks/useUserContext";
import ErrorMessage from "./ErrorMessage";
import { InputFieldProps, UserProps } from "../types";

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  margin: 5px;
  color: white;
`;

const InputElement = styled.input`
  height: 30px;
  border-radius: 5px;
`;

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  onKeyPress,
}) => (
  <InputFieldContainer>
    <Label>{label}</Label>
    <InputElement
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
    />
  </InputFieldContainer>
);

const Busca: React.FC = () => {
  const { getUsers, users, inputError, error } = useUserContext();
  const [page, setPage] = useState("");
  const [fromdate, setFromDate] = useState("");
  const [todate, setToDate] = useState("");

  const handleSubmit = () => {
    getUsers(
      parseInt(page),
      Math.floor(new Date(fromdate).getTime() / 1000),
      Math.floor(new Date(todate).getTime() / 1000)
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const openProfile = (user: UserProps) => {
    window.open(user.link, "_blank");
  };

  return (
    <div>
      {inputError && <ErrorMessage message={inputError} />}
      {error && <ErrorMessage message={error} />}
      <Row>
        <InputField
          label="Inicio"
          value={fromdate}
          onChange={setFromDate}
          onKeyPress={handleKeyPress}
        />
        <InputField
          label="Fim"
          value={todate}
          onChange={setToDate}
          onKeyPress={handleKeyPress}
        />
        <InputField
          label="Pagina"
          value={page}
          onChange={setPage}
          onKeyPress={handleKeyPress}
        />
      </Row>
      {users && (
        <ResultsContainer>
          {users.items.map((user) => (
            <Result key={user.user_id} onClick={() => openProfile(user)}>
              <UserInfo>
                <UserName>{user.display_name}</UserName>
                <Badges>
                  <Badge color="gold">{user.badge_counts.gold}</Badge>
                  <Badge color="silver">{user.badge_counts.silver}</Badge>
                  <Badge color="bronze">{user.badge_counts.bronze}</Badge>
                </Badges>
              </UserInfo>
            </Result>
          ))}
        </ResultsContainer>
      )}
    </div>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  width: 70%;
  gap: 50px;
  margin-bottom: 10px;
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  background-color: black;
  padding: 20px;
`;

const Result = styled.div`
  margin-bottom: 10px;
  cursor: pointer; /* Para indicar que o elemento é clicável */
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  color: white;
  margin: 0;
  margin-right: 20px;
  cursor: pointer; /* Altera o cursor para indicar que é clicável */
`;

const Badges = styled.div`
  display: flex;
  gap: 10px;
`;

const Badge = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) =>
    color === "bronze"
      ? "#cd7f32"
      : color === "silver"
      ? "#c0c0c0"
      : "#ffd700"};
  color: black;
`;

export default Busca;
