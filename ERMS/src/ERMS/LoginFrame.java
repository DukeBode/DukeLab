package ERMS;

import ERMS.SQLiteJDBC;
import ERMS.SysFrame;
import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.GridBagLayout;
import javax.swing.JButton;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import javax.swing.JTextField;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.BoxLayout;
import java.awt.FlowLayout;
import javax.swing.SpringLayout;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.SwingConstants;
import javax.swing.JMenuItem;
import java.awt.Window.Type;

public class LoginFrame extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JTextField textField_1;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					LoginFrame frame = new LoginFrame();
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
	public LoginFrame() {
		setType(Type.POPUP);
		setResizable(false);
		setTitle("\u8003\u8BD5\u62A5\u540D\u7BA1\u7406\u7CFB\u7EDF");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 443, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);

		JLabel lblNewLabel = new JLabel("\u8003\u751F\u62A5\u540D\u7BA1\u7406\u7CFB\u7EDF");
		lblNewLabel.setBounds(94, 48, 238, 33);
		lblNewLabel.setFont(new Font("ËÎÌו", Font.PLAIN, 28));

		textField = new JTextField();
		textField.setBounds(119, 91, 189, 29);
		textField.setColumns(10);

		textField_1 = new JTextField();
		textField_1.setBounds(119, 140, 189, 29);
		textField_1.setColumns(10);

		JButton button_1 = new JButton("\u767B       \u5F55");
		button_1.setBounds(119, 179, 189, 33);
		button_1.addActionListener(new ActionListener() {
		SQLiteJDBC sqlite = new SQLiteJDBC();
			public void actionPerformed(ActionEvent e) {
				sqlite.login(textField.getText(), textField_1.getText());
				SysFrame frame = new SysFrame();
				frame.setVisible(true);
				setVisible(false);
			}
		});
		contentPane.setLayout(null);
		contentPane.add(lblNewLabel);
		contentPane.add(textField);
		contentPane.add(textField_1);
		contentPane.add(button_1);
		setLocationRelativeTo(null);
	}
}
