// //œ‘ ænŒ¨ª√∑Ω1.0
// //auther:Duke
// //E-mail:Duke123@aliyun.com
// //Data:2018-02-28
// 
// #include<stdio.h>
// #include<stdlib.h>
// 
// int main(void) {
// 	printf_s("Enter a number:");
// 	int n, i, x = 0;
// 	scanf_s("%d", &n);
// 	i = n * n;
// 	int *p = calloc(i,sizeof(int));
// 	int x = n - 1, y = n / 2;
// 	if (n % 2 == 0)y--;
// 	//while (i != n) num[i++].resize(n);
// 	while (i) {
// 		int key = n;
// 		while (key--) {
// 			p[x][y] = i--;
// 			x = x == n - 1 ? 0 : x + 1;
// 			y = y == n - 1 ? 0 : y + 1;
// 		}
// 		x = x == 0 ? n - 1 : x - 1;
// 		y = y == 0 ? n - 1 : y - 1;
// 		x = x == 0 ? n - 1 : x - 1;
// 	}
// 	
// 	while (x != n) {
// 		int y = 0;
// 		while (y != n) cout << num[x][y++] << '\t';
// 		cout << endl;
// 		x++;
// 
// 	free(p);
// 	return 0;
// }
