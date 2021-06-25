import React, { useState, useEffect } from 'react';
import starWarsAPI from '../services/starWarsAPI';

export default function TableStarWars() {
  useEffect(() => {
    const response = async () => {
      const data = await starWarsAPI();
      console.log(data.results);
    };
    response();
  }, []);

  return (
    <table>
      <thead />
      <tbody />
    </table>
  );
}
