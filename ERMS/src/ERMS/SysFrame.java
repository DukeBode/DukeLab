package ERMS;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import javax.swing.event.TableModelEvent;
import javax.swing.event.TableModelListener;
import javax.swing.JTable;
import javax.swing.JButton;
import javax.swing.JTabbedPane;
import javax.swing.JDesktopPane;
import javax.swing.BoxLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JSplitPane;
import javax.swing.JInternalFrame;
import javax.swing.JTextField;
import javax.swing.JLabel;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableModel;
import javax.swing.JList;
import javax.swing.AbstractListModel;
import javax.swing.JComboBox;
import javax.swing.DefaultComboBoxModel;
import java.awt.CardLayout;
import java.awt.Component;
import javax.swing.SwingConstants;
import javax.swing.JTextPane;
import java.awt.Font;

public class SysFrame extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;
	private JTable table;
	private JTable table_1;
	private JTable table_2;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					SysFrame frame = new SysFrame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public SysFrame() {
		SQLiteJDBC sqlite = new SQLiteJDBC();
		setResizable(false);
		setTitle("\u8003\u8BD5\u62A5\u540D\u7BA1\u7406\u7CFB\u7EDF");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 775, 503);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(new BorderLayout(0, 0));
		
		JTabbedPane tabbedPane_1 = new JTabbedPane(JTabbedPane.TOP);
		contentPane.add(tabbedPane_1);
		
		JPanel panel_2 = new JPanel();
		tabbedPane_1.addTab("\u62A5\u540D\u8868", null, panel_2, null);
		panel_2.setLayout(new CardLayout(0, 0));
		String[] name={"学号","姓名","性别"};
		Object[][] tableDate=new Object[100][8];
        for(int i=0;i<5;i++)
        {
            tableDate[i][0]="1000"+i;
            for(int j=1;j<3;j++)
            {
                tableDate[i][j]=0;
            }
        }
//        Object[][] EXAMINEE=sqlite.query("EXAMINEE","E");
//        System.out.println(EXAMINEE);
		table = new JTable(tableDate,name);
		TableModel tableModel = table.getModel();
		tableModel.addTableModelListener(new TableModelListener() {
			public void tableChanged(TableModelEvent e) {
				System.out.println(e.getColumn());
				System.out.println(e.getFirstRow());
//				System.out.println(e.getLastRow());
//				System.out.println(e.getType());
				System.out.println(tableModel.getValueAt(e.getFirstRow(),e.getColumn()));
			}
		});
				panel_2.add(new JScrollPane(table), "name_138482037688499");
		
		JPanel panel_1 = new JPanel();
		tabbedPane_1.addTab("\u8003\u751F\u4FE1\u606F", null, panel_1, null);
		panel_1.setLayout(null);
		
		JLabel label = new JLabel("\u59D3\u540D");
		label.setBounds(226, 68, 54, 15);
		panel_1.add(label);
		
		textField = new JTextField();
		textField.setBounds(325, 65, 130, 23);
		panel_1.add(textField);
		textField.setColumns(10);
		
		JLabel label_1 = new JLabel("\u5B66\u53F7");
		label_1.setBounds(226, 151, 54, 15);
		panel_1.add(label_1);
		
		textField_1 = new JTextField();
		textField_1.setBounds(325, 148, 130, 23);
		panel_1.add(textField_1);
		textField_1.setColumns(10);
		
		JLabel label_2 = new JLabel("\u6027\u522B");
		label_2.setBounds(226, 217, 54, 15);
		panel_1.add(label_2);
		
		JComboBox comboBox_1 = new JComboBox();
		comboBox_1.setModel(new DefaultComboBoxModel(new String[] {"\u7537", "\u5973"}));
		comboBox_1.setBounds(325, 213, 130, 23);
		panel_1.add(comboBox_1);
		
		JButton button_1 = new JButton("\u6DFB\u52A0/\u4FEE\u6539");
		button_1.setBounds(306, 290, 93, 23);
		button_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				sqlite.updateExaminee(textField.getText(),textField_1.getText(),comboBox_1.getSelectedItem().toString());
			}
		});
		panel_1.add(button_1);
		
		JButton button = new JButton("\u5220\u9664");
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				sqlite.deleteExaminee(textField_1.getText());
			}
		});
		button.setBounds(422, 289, 93, 25);
		panel_1.add(button);
		
		JButton btnNewButton = new JButton("\u67E5\u8BE2");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				sqlite.queryExaminee(textField.getText(),textField_1.getText());
			}
		});
		btnNewButton.setBounds(187, 289, 93, 25);
		panel_1.add(btnNewButton);
		
		
		JPanel panel = new JPanel();
		tabbedPane_1.addTab("\u8003\u573A\u4FE1\u606F", null, panel, null);
		panel.setLayout(null);
		
		JComboBox comboBox = new JComboBox();
		comboBox.setBounds(212, 31, 330, 23);
		panel.add(comboBox);
		
		JLabel label_3 = new JLabel("\u8003\u8BD5\u79D1\u76EE\uFF1A");
		label_3.setHorizontalAlignment(SwingConstants.RIGHT);
		label_3.setBounds(122, 35, 80, 15);
		panel.add(label_3);
		
		JButton button_2 = new JButton("\u67E5\u8BE2");
		button_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				sqlite.queryExam(comboBox.getSelectedItem().toString());
			}
		});
		button_2.setBounds(558, 30, 95, 25);
		panel.add(button_2);
		
		JPanel panel_4 = new JPanel();
		panel_4.setBounds(82, 79, 584, 297);
		panel.add(panel_4);
		String[] room={"序号","教室","座位数"};
		table_1 = new JTable(tableDate,room);
		table_1.setBounds(276, 250, -102, -64);
		TableModel tableModel_1 = table_1.getModel();
		tableModel_1.addTableModelListener(new TableModelListener() {
			public void tableChanged(TableModelEvent e) {
				System.out.println(e.getColumn());
				System.out.println(e.getFirstRow());
//				System.out.println(e.getLastRow());
//				System.out.println(e.getType());
				System.out.println(tableModel_1.getValueAt(e.getFirstRow(),e.getColumn()));
			}
		});
		JScrollPane scrollPane = new JScrollPane(table_1);
		panel_4.add(scrollPane);
		
		JButton button_4 = new JButton("\u66F4\u65B0\u8003\u573A\u4FE1\u606F");
		button_4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				sqlite.updateRoom();
			}
		});
		button_4.setBounds(531, 403, 135, 25);
		panel.add(button_4);
		
		JPanel panel_3 = new JPanel();
		tabbedPane_1.addTab("\u8003\u8BD5\u4FE1\u606F", null, panel_3, null);
		panel_3.setLayout(null);
		
		JPanel panel_5 = new JPanel();
		panel_5.setBounds(90, 21, 569, 321);
		panel_3.add(panel_5);
		String[] exam= {"序号","考试科目","考试时间"};
		table_2 = new JTable(tableDate,exam);
		TableModel tableModel_2 = table_2.getModel();
		tableModel_2.addTableModelListener(new TableModelListener() {
			public void tableChanged(TableModelEvent e) {
				System.out.println(e.getColumn());
				System.out.println(e.getFirstRow());
//				System.out.println(e.getLastRow());
//				System.out.println(e.getType());
				System.out.println(tableModel_2.getValueAt(e.getFirstRow(),e.getColumn()));
			}
		});
		JScrollPane scrollPane_1 = new JScrollPane(table_2);
		panel_5.add(scrollPane_1);
		
		JButton button_3 = new JButton("\u66F4\u65B0\u8003\u8BD5\u4FE1\u606F");
		button_3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
//				System.out.println(table_2.getValueAt());
				sqlite.updateExam();
			}
		});
		button_3.setBounds(492, 368, 143, 25);
		panel_3.add(button_3);
		
		JPanel panel_6 = new JPanel();
		tabbedPane_1.addTab("\u5E2E\u52A9", null, panel_6, null);
		panel_6.setLayout(null);
		
		JLabel lblV = new JLabel("\u8003\u8BD5\u62A5\u540D\u7BA1\u7406\u7CFB\u7EDF v1.0");
		lblV.setFont(new Font("黑体", Font.BOLD, 52));
		lblV.setHorizontalAlignment(SwingConstants.CENTER);
		lblV.setBounds(77, 38, 599, 60);
		panel_6.add(lblV);
		
		JTextPane txtpnSqliteWhere = new JTextPane();
		txtpnSqliteWhere.setText("    \u6B63\u5728\u66F4\u65B0\u3002\u3002\u3002\u3002\r\n    \u8BF7\u7A0D\u540E\u3002\u3002\u3002");
		txtpnSqliteWhere.setEditable(false);
		txtpnSqliteWhere.setBounds(146, 147, 461, 189);
		panel_6.add(txtpnSqliteWhere);
		
		JLabel lbldukeStudio = new JLabel("Duke Studio");
		lbldukeStudio.setFont(new Font("宋体", Font.PLAIN, 16));
		lbldukeStudio.setHorizontalAlignment(SwingConstants.CENTER);
		lbldukeStudio.setBounds(270, 346, 213, 32);
		panel_6.add(lbldukeStudio);
		
		JLabel lblNewLabel = new JLabel("\u53D1\u5E03\u65E5\u671F 2018\u5E7412\u6708");
		lblNewLabel.setFont(new Font("宋体", Font.PLAIN, 16));
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		lblNewLabel.setBounds(284, 375, 185, 32);
		panel_6.add(lblNewLabel);
		setLocationRelativeTo(null);
	}
}
