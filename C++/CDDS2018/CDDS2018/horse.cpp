#include"horse.h"
SeqList L;
int board[8][8];
int start;
//��Ŀ����߷��Ե�ǰλ�õĺ�������
int deltar[] = { -2, -1, 1, 2, 2, 1, -1, -2 };
int deltac[] = { 1,  2, 2, 1,-1,-2, -2, -1 };
int exitn(int r, int c, int nexta[])
{
	//��������λ��(r,c)�ĳ�����,nexta[]Ϊ���ں�
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
	//�����´ο����ҵ��������ĸ���
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

//ѡ����һ������
int next(int r, int c)
{
	//min����ȷ�����ٳ�����
	int nexta[8], num, num1 = 0, min, i, k;
	min = 9;
	num = exitn(r, c, nexta);//numΪ(r,c)�ĳ��ڸ���
	if (num == 0)return -1;  //û�г��� 
	for (i = 0; i <= num - 1; i++) {
		// �ҳ������ٵĵ�
		num1 = number(r + deltar[nexta[i]], c + deltac[nexta[i]]);
		if (num1 <= min){
			min = num1;
			k = nexta[i];
		}
	}
	return k;//���س������ٵĵ�
}

void horse()
{
	system("cls");
	int ber, bec;//���ڱ��������ʼ������
	int r, c;//����
	std::cout << "���������λ��(x y):";
	std::cin >> bec >> ber;
	if (ber > 0 && ber-- < 9 && bec>0 && bec-- < 9) {
		start = 0;
		while (start <= 7)//���в��ԵĴ���
		{
			do {
				for (int i = 0; i <= 7; i++)
					//��ʼ��board����
					for (int j = 0; j <= 7; j++)L.board[i][j] = 0;
				r = ber;//����ǰֵ����r
				c = bec;//����ǰֵ����c
				L.board[r][c] = 1;//����ʼλ�ø�ֵΪ1
				for (L.step = 2; L.step <= 64; L.step++) {
					//��·��ͨ
					int k = next(r, c);
					if (k == -1) {
						start++;
						break;//������һ�β���
					}
					r += deltar[k];
					c += deltac[k];
					L.board[r][c] = L.step;
				}
			} while (L.step <= 64);
			//��������������̵ĸ�����������������ɹ�
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
