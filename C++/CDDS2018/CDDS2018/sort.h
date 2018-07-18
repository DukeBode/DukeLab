#pragma once
#include<iostream>
#include<ctime>
#include<fstream>
#define MAXSIZE 1000  //����������󳤶�
#define SORTNUM 10   //����10�����򷽷�
#define max 100    //��������ʱ���ݵ����λ����������λ��
typedef int DataType[MAXSIZE + 2];
typedef struct node {
	int data3;
	int next;
} node;

//�ԱȽϴ������ƶ���������
void BeforeSort();
//�����е�i��Ԫ��С�ڵ�j��Ԫ�أ��򷵻�True�����򷵻�False
bool Less(int i, int j);
//�������е�i���͵�j��Ԫ��
void Swap(int i, int j);
//��R2[j]����R[i]
void Shift(DataType &R, DataType &R2, int i, int j);
void CopyData(DataType list1, DataType list2);
//�����������Ϊ����
void InverseOrder();
//��ϵͳ���һ����
void RandomizeList();
//�������
void output();
//ð������
void BubbleSort();
//��������
void InsertSort();
//ѡ������
void SelectSort();
int Partition(int low, int high);
//QuickSort�ĸ�������
void QSort(int low, int high);
//��������
void QuickSort();
//ϣ������
void ShellSort();
//������ĵ��Ѻ���
void Sift(int left, int right);
//������
void HeapSort();
//�۰��������
void BInsertSort();
//2-·��������
void Binsort();
void Merge(int low, int m, int high);
void MSort(int low, int high);
//�鲢����
void MergeSort();
void Distribute(node *a, int w);
void Collect(node *a);
//���������㷨
void RadixSort();
//ϵͳ��ʼ��
void Initialization();
//���ø����㷨
void Interpret(int cmd);
void sort();