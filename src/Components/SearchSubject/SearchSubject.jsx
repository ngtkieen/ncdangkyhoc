import React, { useState } from 'react';

import styles from "./SearchSubject.module.css";

function SearchSubject() {
  const [subject, setSubject] = useState('');

  const handleSearch = () => {
    if (subject) {
      alert('Tìm kiếm thành công');
    } else {
      alert('Vui lòng nhập mã môn học.');
    }
  };

  return (
    <div>
      <label htmlFor="subject">Kiểm tra môn </label>
      <input
        type="text"
        id={styles.subject}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button id={styles.buttonSubject} onClick={handleSearch}>Kiểm tra</button>
    </div>
  );
}

export default SearchSubject;
