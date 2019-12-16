package ERMS;

import java.io.File;
import java.sql.*;

public class SQLiteJDBC {
//	Connection c = null;
	public SQLiteJDBC() {
		File file = new File("erms.db");
		if (!file.exists()) {
//			try {
//				Class.forName("org.sqlite.JDBC");
//				c = DriverManager.getConnection("jdbc:sqlite:erms.db");
//			} catch (Exception e) {
//				System.err.println(e.getClass().getName() + ": " + e.getMessage());
//				System.exit(0);
//			}
			String[] sqls = { "CREATE TABLE ACCOUNT (NAME TEXT NOT NULL, PASSWD TEXT)",
					"CREATE TABLE ROOM (NAME TEXT NOT NULL, NUM TEXT)",
					"CREATE TABLE EXAM (NAME TEXT NOT NULL, TIME TEXT)",
					"CREATE TABLE EXAMINEE (NAME TEXT NOT NULL, NUM INT,SEX TEXT)" };
			String log = "Opened database successfully!!!";
			update(sqls, log);
		}
	}

	public void update(String[] sqls, String log) {
		Connection c = null;
		Statement stmt = null;
		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			stmt = c.createStatement();
			for (String sql : sqls) {
				stmt.executeUpdate(sql);
			}
			stmt.close();
			c.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
//			System.exit(0);
		}
		System.out.println(log);
	}

//	public ResultSet query(String sql, String log) {
//		Connection c = null;
//		Statement stmt = null;
//		ResultSet rs = null;
//		try {
//			Class.forName("org.sqlite.JDBC");
//			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
//			stmt = c.createStatement();
//			rs = stmt.executeQuery(sql);
//			stmt.close();
//			c.close();
//		} catch (Exception e) {
//			System.err.println(e.getClass().getName() + ": " + e.getMessage());
//			System.exit(0);
//		}
//		System.out.println(log);
//		return rs;
//	}

	public Object[][] query(String table, String log) {
		Connection c = null;
		Object[][] tableDate = new Object[100][];
		Statement stmt = null;
		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			stmt = c.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM " + table + ";");
			int i = 0;
			while (rs.next()) {
				System.out.println(rs.getString("NAME"));
				if (i < 100) 
			            tableDate[i][0]="1000"+i;
					tableDate[i][0] = i;
					tableDate[i][1] = rs.getString("NAME");
					System.out.println(tableDate[i][1]);
					if(table=="ROOM") {
						tableDate[i][2]=rs.getInt("NUM");
					}else if(table=="EXAM") {
						tableDate[i][2]=rs.getDate("TIME");
					}else if(table=="EXAMINEE") {
						tableDate[i][2]=rs.getInt("NUM");
						tableDate[i][3]=rs.getString("SEX");
					}
				i++;
			}
			stmt.close();
			System.out.println(log);
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
		}
		return tableDate;
	}

	public void login(String admin, String pass) {
		System.out.println(admin + " " + pass);
		try {
			Class.forName("org.sqlite.JDBC");
			Connection c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			c.setAutoCommit(false);
			Statement stmt = c.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM ACCOUNT;");
			while (rs.next()) {
				if (admin.equals(rs.getString("NAME")))
					break;
			}
			stmt.executeUpdate("INSERT INTO ACCOUNT (NAME, PASSWD) VALUES ('" + admin + "','" + pass + "');");
			stmt.close();
			c.commit();
			c.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println(admin + "µÇÂ¼³É¹¦");
	}

	public void queryExaminee(String name, String num) {
		if (num != null) {
			String sql = "SELECT * FROM EXAMINEE WHERE NUM=" + num;
		} else if (name != null) {

		}
	}

	public void updateExaminee(String name, String num, String sex) {
		if (name != num) {
			deleteExaminee(num);
			String[] sqls = {
					"INSERT INTO EXAMINEE (NAME,NUM,SEX) " + "VALUES ('" + name + "', '" + num + "', '" + sex + "');" };
//			System.out.println(sqls);
			String log = "update" + name;
			update(sqls, log);
		}
	}

	public void deleteExaminee(String num) {
		if (num == "") {
			String[] strs = { "DELETE from EXAMINEE where NUM='" + num + "';" };
			String log = "É¾³ý" + num;
			update(strs, log);
		}
	}

	public void queryExam(String name) {
		String sql = "SELECT * FROM EXAMINEE WHERE NAME=" + name;
		Connection c = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			stmt = c.createStatement();
			rs = stmt.executeQuery(sql);
			stmt.close();
			c.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println("chazhao");
	}

	public void updateRoom() {
		String sql = "SELECT * FROM EXAMINEE WHERE NAME=";
		Connection c = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			stmt = c.createStatement();
			rs = stmt.executeQuery(sql);
			stmt.close();
			c.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println("chazhao");

	}

	public void updateExam() {
		String sql = "SELECT * FROM EXAMINEE WHERE NAME=";
		Connection c = null;
		Statement stmt = null;
		ResultSet rs = null;
		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:erms.db");
			stmt = c.createStatement();
			rs = stmt.executeQuery(sql);
			stmt.close();
			c.close();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println("chazhao");

	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		new SQLiteJDBC();
	}

}
