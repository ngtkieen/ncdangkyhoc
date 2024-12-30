import React from "react";
import styles from "./Transcript.module.css";
import SearchSubject from "../SearchSubject/SearchSubject";
export const Transcript = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            alt="Thang Long University Logo"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/VPzCAWH1GW51FJgz0DphCbbd8Cj8szEluCI7pRVffxuYdCAUA.jpg"
            width={40}
          />
        </div>
        <h1>TRƯỜNG ĐẠI HỌC THĂNG LONG</h1>
        <div className={styles.icons}>
          <i className="fas fa-bell"> </i>
          <i className="fas fa-flag"> </i>
          <i className="fas fa-user" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <img
            alt="User Avatar"
            height={80}
            src="https://storage.googleapis.com/a1aa/image/43G4JqWrMi4DJRY06puuMRpgo6Kt2QFelCKk5OcKudOtOBAKA.jpg"
            width={80}
          />
          <h2>NGUYỄN TRUNG KIÊN</h2>
          <p>A36756</p>
          <p>Sinh viên</p>
          <div className={styles.menu}>
            <a href="#"> Chương trình đào tạo </a>
            <a className={styles.active} href="#">
              Kết quả học tập
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <h2>KẾT QUẢ HỌC TẬP</h2>
          <div className={styles.filters}>
            <select>
              <option>Khoa học máy tính - Khóa 32</option>
            </select>
            <select>
              <option>Tất cả</option>
            </select>
            <select>
              <option>Tất cả</option>
            </select>
          </div>
          <div className={styles.filters}>
            <label>
              <input defaultChecked name="view" type="radio" />
              Xem điểm sinh viên
            </label>
            <label>
              <input name="view" type="radio" />
              Xem điểm theo chương trình đào tạo
            </label>
          </div>
          <div className={styles.filters}>
            <SearchSubject/>
          </div>
          <div className={styles.tableContainer}>
            <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã môn học</th>
                <th>Tên môn học</th>
                <th>Số TC</th>
                <th>Điểm hệ 10</th>
                <th>Điểm hệ 4</th>

                <th>Kết quả</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AD216</td>
                <td>Kỹ năng sống</td>
                <td>3</td>
                <td>9.70</td>
                <td>3.88</td>

                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td>Ngoài chương trình</td>
              </tr>
              <tr>
                <td>2</td>
                <td>CF211</td>
                <td>Phân tích và thiết kế thuật toán</td>
                <td>2</td>
                <td>9.00</td>
                <td>3.60</td>

                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td>Ngoài chương trình</td>
              </tr>
              <tr>
                <td>3</td>
                <td>CF212</td>
                <td>Cấu trúc dữ liệu</td>
                <td>3</td>
                <td>6.40</td>
                <td>2.56</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td>Ngoài chương trình</td>
              </tr>
              <tr>
                <td>4</td>
                <td>CF231</td>
                <td>Lý thuyết thông tin và mã hóa</td>
                <td>2</td>
                <td>7.70</td>
                <td>3.08</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>CS100</td>
                <td>Tin đại cương</td>
                <td>2</td>
                <td>9.00</td>
                <td>3.60</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>CS102</td>
                <td>Tin học văn phòng</td>
                <td>2</td>
                <td>8.40</td>
                <td>3.36</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td>CS110</td>
                <td>Kỹ thuật số</td>
                <td>2</td>
                <td>7.60</td>
                <td>3.04</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td>CS121</td>
                <td>Ngôn ngữ lập trình</td>
                <td>3</td>
                <td>5.60</td>
                <td>2.24</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>CS122</td>
                <td>Lập trình hướng đối tượng</td>
                <td>3</td>
                <td>8.50</td>
                <td>3.40</td>
                <td>
                  <i class="fas fa-check-circle"> </i>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};
