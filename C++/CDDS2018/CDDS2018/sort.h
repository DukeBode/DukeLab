#pragma once
#include<iostream>
#include<ctime>
#include<fstream>
#define MAXSIZE 1000  //可排序表的最大长度
#define SORTNUM 10   //测试10中排序方法
#define max 100    //基数排序时数据的最大位数不超过百位；
typedef int DataType[MAXSIZE + 2];
typedef struct node {
	int data3;
	int next;
} node;

//对比较次数和移动次数清零
void BeforeSort();
//若表中第i个元素小于第j个元素，则返回True，否则返回False
bool Less(int i, int j);
//交换表中第i个和第j个元素
void Swap(int i, int j);
//将R2[j]赋给R[i]
void Shift(DataType &R, DataType &R2, int i, int j);
void CopyData(DataType list1, DataType list2);
//将可排序表置为逆序
void InverseOrder();
//由系统随机一组数
void RandomizeList();
//输出函数
void output();
//冒泡排序
void BubbleSort();
//插入排序
void InsertSort();
//选择排序
void SelectSort();
int Partition(int low, int high);
//QuickSort的辅助函数
void QSort(int low, int high);
//快速排序
void QuickSort();
//希尔排序
void ShellSort();
//堆排序的调堆函数
void Sift(int left, int right);
//堆排序
void HeapSort();
//折半插入排序
void BInsertSort();
//2-路插入排序
void Binsort();
void Merge(int low, int m, int high);
void MSort(int low, int high);
//归并排序
void MergeSort();
void Distribute(node *a, int w);
void Collect(node *a);
//基数排序算法
void RadixSort();
//系统初始化
void Initialization();
//调用各个算法
void Interpret(int cmd);
void sort();