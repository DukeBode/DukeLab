////œ‘ ænŒ¨ª√∑Ω1.0
////auther:Duke
////E-mail:Duke123@aliyun.com
////Data:2018-02-28
//
//#include<iostream>
//#include<vector>
//
//using namespace std;
//vector<vector<int>> num;
//
//void number_position(int n) {
//	int i = 0, x = n - 1, y = n / 2;
//	if (n % 2 == 0)y--;
//	num.resize(n);
//	while (i != n) num[i++].resize(n);
//	i = n * n;
//	while (i) {
//		int key = n;
//		while (key--) {
//			num[x][y] = i--;
//			x = x == n - 1 ? 0 : x + 1;
//			y = y == n - 1 ? 0 : y + 1;
//		}
//		x = x == 0 ? n - 1 : x - 1;
//		y = y == 0 ? n - 1 : y - 1;
//		x = x == 0 ? n - 1 : x - 1;
//	}
//}
//
//int main()
//{
//	cout << "Enter a number:";
//	int n, x = 0;
//	cin >> n;
//	number_position(n);
//	while (x != n) {
//		int y = 0;
//		while (y != n) cout << num[x][y++] << '\t';
//		cout << endl;
//		x++;
//	}
//	return 0;
//}
