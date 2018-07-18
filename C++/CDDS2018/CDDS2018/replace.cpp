#include"replace.h"
using namespace std;
int h = 0;
int lens[rMAX][rMAX];
void creatfile(tmp *s, int j)    //文件创立函数                 
{
	int i = -1;
	errno_t err;
	FILE *fp;
	switch (j)
	{
	case 0:strcpy_s(s->name[j], "text1.h"); break;
	case 1:strcpy_s(s->name[j], "text2.h"); break;
	case 2:strcpy_s(s->name[j], "text3.h"); break;
	}
	err = fopen_s(&fp, s->name[j], "w");
	if (err)
	{
		cout << "不能打开文件!!!" << endl;
		exit(1);
	}
	cout << s->name[j] << endl;
	cout << "输入文件内容:" << endl;
	while (s->str[j + 1][i][0] != '\n')
	{
		i++;
		gets_s(s->str[j + 1][i]);
		lens[j + 1][i] = strlen(s->str[j + 1][i]);
		strcat_s(s->str[j + 1][i], "\n");
		fputs(s->str[j + 1][i], fp);
	}
	fclose(fp);
}
void change(tmp *s, char *ch, int x)  //递归函数
{
	FILE *fp1, *fp;
	int i = 0, j = 0;
	errno_t err;
	err = fopen_s(&fp1, ch, "r");
	if (err)
	{
		cout << "文件打开失败！！！" << endl;
		exit(1);
	}
	
	while (s->str[x][i][0] != '\n')
	{
		fgets(s->str[x][i], lens[x][i] + 2, fp1);
		if (strcmp(s->str[x][i], "#include<text>\n") == 0){
			h++;
			if (h == 1)change(s, s->name[1], 2);
			if (h == 2)change(s, s->name[2], 3);
		}
		else
		{
			strcpy_s(s->name[3], "text4.h");//文件四的建立
			err = fopen_s(&fp, s->name[3], "a+");
			if (err){
				cout << "文件打开失败！！！" << endl;
				exit(1);
			}
			fputs(s->str[x][i], fp);
			fclose(fp);
		}
	}
	fclose(fp1);
}
void replace()
{
	system("cls");
	cin.clear();
	while (cin.get() != '\n') {}
	cout << "# 递归替换程序" << endl;
	tmp s;
	int i, x;
	for (i = 0; i < 3; i++)creatfile(&s, i);
	change(&s, s.name[0], 1);
	cout<<"已完成递归替换问题按0退出：";
	cin >> x;
}
