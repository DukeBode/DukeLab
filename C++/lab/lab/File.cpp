#include "File.h"
//namespace ba = boost::algorithm;//字符串
//void File::show(int key)
//{
//	ifstream file(filename);
//	string content;
//	NLine = 0;
//	if (key) {
//		while (getline(file, content)) {
//			cout << content << endl;
//		}
//	}
//	if (!key) {
//		while (getline(file, content)) {
//			NLine++;
//		}
//	}
//	file.close();
//}
//int File::add_line(int number)
//{
//	ofstream file(filename, ios::app);
//	while(number--){	
//		file << left << setw(line_w) << 'a' << '\n';
//		NLine++;
//	}
//	file.close();
//	return NLine;
//}
//void File::clear_line(int num_line)
//{
//	write_line("", num_line);
//}
////行数据
//string File::line(int num_line)
//{
//	ifstream file(filename);
//	string content;
//	while (num_line--) {
//		getline(file, content);
//	}
//	file.close();
//	return content;
//}
////行列块数据
//string File::line_row(int num_line, int num_row)
//{
//	string line = File::line(num_line);
//	vector<string> content;
//	ba::split(content, line, ba::is_space());
//	return content.at(--num_row);
//}
////列数据
//string File::row(int num_row)
//{
//	num_row--;
//	ifstream file(filename);
//	vector<string> content;
//	string line, row;
//	while (getline(file, line)) {
//		ba::split(content, line, ba::is_space());
//		row.append(content.at(num_row)).append("\n");
//		content.clear();
//	}
//	file.close();
//	return row;
//}
////列行块数据
//string File::row_line(int num_row, int num_line)
//{
//	return File::line_row(num_line,num_row);
//}
////单行写入
//void File::write_line(string str, int num_line)
//{
//	num_line--;
//	fstream file(filename);
//	file.seekp(num_line*line_size);
//	file << left  << str << '\n';
//	file.close();
//}


File::File(string name, string extension)
{
	filename = name;
	lastname = extension;
	if (extension != "")
		fullname = '.';
	fullname = name + fullname + extension;
}

auto File::write(string content)
{
	ofstream file(fullname,ios::trunc);
	file << content;
	file.close();
}

auto File::add(string content, char end)
{
	ofstream file(fullname, ios::app);
	file << content << end;
	file.close();
}

auto File::clear()
{
	write("");
}

auto File::show(char character=EOF)
{
	string content;
	ifstream file(fullname);
	getline(file,content,character);
	file.close();
}
