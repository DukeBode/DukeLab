#include"horse.h"
SeqList L;
int board[8][8];
int start;
//马的可能走法对当前位置的横纵增量
int deltar[] = { -2, -1, 1, 2, 2, 1, -1, -2 };
int deltac[] = { 1,  2, 2, 1,-1,-2, -2, -1 };
int exitn(int r, int c, int nexta[])
{
	//求马所在位置(r,c)的出口数,nexta[]为出口号
	int i, k, a, b;
	int num = 0;
	for (i = 0; i <= 7; i++) {
		k = (i + start) % 8;
		a = r + deltar[k];
		b = c + deltac[k];
		if (a <= 7 && a >= 0 && b >= 0 && b <= 7 && L.board[a][b] == 0) {
			nexta[num] = k;
			num++;
		}
	}
	return num;
}

int number(int r, int c)
{
	//返回下次可以找到的增量的个数
	int i, k, a, b;
	int num = 0;
	for (i = 0; i <= 7; i++) {
		k = (i + start) % 8;
		a = r + deltar[k];
		b = c + deltac[k];
		if (a <= 7 && a >= 0 && b >= 0 && b <= 7 && L.board[a][b] == 0) {
			num++;
		}
	}
	return num;
}

//选择下一个出口
int next(int r, int c)
{
	//min用来确定最少出口数
	int nexta[8], num, num1 = 0, min, i, k;
	min = 9;
	num = exitn(r, c, nexta);//num为(r,c)的出口个数
	if (num == 0)return -1;  //没有出口 
	for (i = 0; i <= num - 1; i++) {
		// 找出口最少的点
		num1 = number(r + deltar[nexta[i]], c + deltac[nexta[i]]);
		if (num1 <= min){
			min = num1;
			k = nexta[i];
		}
	}
	return k;//返回出口最少的点
}

void horse()
{
	system("cls");
	int ber, bec;//用于保存输入初始的行列
	int r, c;//坐标
	std::cout << "请输入马的位置(x y):";
	std::cin >> bec >> ber;
	if (ber > 0 && ber-- < 9 && bec>0 && bec-- < 9) {
		start = 0;
		while (start <= 7)//进行测试的次数
		{
			do {
				for (int i = 0; i <= 7; i++)
					//初始化board数组
					for (int j = 0; j <= 7; j++)L.board[i][j] = 0;
				r = ber;//将当前值赋给r
				c = bec;//将当前值赋给c
				L.board[r][c] = 1;//将初始位置赋值为1
				for (L.step = 2; L.step <= 64; L.step++) {
					//此路不通
					int k = next(r, c);
					if (k == -1) {
						start++;
						break;//进行下一次测试
					}
					r += deltar[k];
					c += deltac[k];
					L.board[r][c] = L.step;
				}
			} while (L.step <= 64);
			//如果步数大于棋盘的格子数，则表明遍历成功
			if (L.step > 64){
				std::cout << std::endl;
				for (int i = 0; i <= 7; i++){
					for (int j = 0; j <= 7; j++)std::cout << L.board[i][j] << "\t";// printf("%4d ", L.board[i][j]);
					std::cout<<"\n"<<std::endl;
				}
				start++;
				break;
			}
		}
	}
}
