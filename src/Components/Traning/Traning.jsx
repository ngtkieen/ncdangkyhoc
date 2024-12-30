import React from "react";
import styles from "./Traning.module.css";

export const Traning = () => {
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
            <a className={styles.active} href="#"> Chương trình đào tạo </a>
            <a  href="#">
              Kết quả học tập
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <h2>CHƯƠNG TRÌNH ĐÀO TẠO</h2>
          <div className={styles.filters}>
            <select>
              <option>Khoa học máy tính - Khóa 32</option>
            </select>
          </div>
          <div className={styles.tableContainer}>
            <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>MÃ HỌC PHẦN</th>
                <th>TÊN HỌC PHẦN</th>
                <th>SỐ TC</th>
                <th>SỐ TIẾT LT</th>
                <th>SỐ TIẾT TH</th>

                <th>HỌC PHẦN TIÊN QUYẾT</th>
                <th>HỌC PHẦN TƯƠNG ĐƯƠNG</th>
                <th>KHOA/BỘ MÔN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr>
              <tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr><tr>
                <td>1</td>
                <td>AI130</td>
                <td>Nhập môn trí tuệ nhân tạo</td>
                <td></td>
                <td>45</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Khoa Công Nghệ Thông Tin</td>
              </tr>
              
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};
