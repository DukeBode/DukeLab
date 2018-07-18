#include"sort.h"
using namespace std;

DataType data1;
DataType data2;
DataType R1;
int Size;//�������ĳ���
int head;
int fr[10];
int re[10];
long compCount;//ͳ�ƱȽϴ���
long shiftCount;//ͳ���ƶ�����

void BeforeSort()//�ԱȽϴ������ƶ���������
{
	compCount = 0;
	shiftCount = 0;
}

bool Less(int i, int j)//�����е�i��Ԫ��С�ڵ�j��Ԫ�أ��򷵻�True�����򷵻�False
{
	compCount++;
	return data1[i] < data1[j];
}

void Swap(int i, int j)//�������е�i���͵�j��Ԫ��
{
	int a;
	a = data1[i];
	data1[i] = data1[j];
	data1[j] = a;
	shiftCount = shiftCount + 3;
}

void Shift(DataType &R, DataType &R2, int i, int j)//��R2[j]����R[i]
{
	R[i] = R2[j];
	shiftCount++;
}

void CopyData(DataType list1, DataType list2)
{
	int i;
	for (i = 1; i <= Size; i++) list2[i] = list1[i];

}

void InverseOrder()//�����������Ϊ����
{
	int i, j;
	for (i = 1, j = Size; i <= Size / 2; i++, j--){
		int a;
		a = data1[i];
		data1[i] = data1[j];
		data1[j] = a;
	}
	CopyData(data1, data2);
}

void RandomizeList()//��ϵͳ���һ����
{
	int i;
	srand(time(0));
	for (i = 1; i <= Size; i++)
		data1[i] = rand() % (Size + 1);
	CopyData(data1, data2);
	ofstream out_stream;
	out_stream.open("input.txt", ios::app);
	if (out_stream.fail()){
		cout << "input file opening failed.\n";
		exit(1);
	}
	for (i = 1; i <= Size; i++) out_stream << data1[i] << " ";
	out_stream << "\n";
	out_stream.close();
}

void output()//�������
{
	ofstream out_stream;
	cout << "\t" << compCount << "\t\t" << shiftCount << "\n";
	out_stream.open("output.txt", ios::app);
	if (out_stream.fail()){
		cout << "Output file opening failed.\n";
		exit(1);
	}
	out_stream << "\t" << compCount << "\t\t" << shiftCount << "\n";
	out_stream.close();
}

void BubbleSort()//ð������
{
	BeforeSort();
	int swapped, i, m;
	m = Size - 1;
	do {
		swapped = 0;
		for (i = 1; i <= m; i++)
			if (Less(i + 1, i)){
				Swap(i + 1, i);
				swapped = 1;
			}
		m--;
	} while (swapped);
	output();
}

void InsertSort() //��������
{
	BeforeSort();
	int i, j;
	for (i = 2; i <= Size; i++){
		Shift(data1, data1, 0, i);
		j = i - 1;
		while (Less(0, j)){
			Shift(data1, data1, j + 1, j);
			j--;
		}
		Shift(data1, data1, j + 1, 0);
	}
	output();
}

void SelectSort()//ѡ������
{
	BeforeSort();
	int i, j, min;
	for (i = 1; i <= Size - 1; i++){
		min = i;
		for (j = i + 1; j <= Size; j++)
			if (Less(j, min)) min = j;
		if (i != min) Swap(i, min);
	}
	output();
}

int Partition(int low, int high)
{
	int pivotkey;
	Shift(data1, data1, 0, low);
	pivotkey = data1[low];
	while (low < high) {
		compCount++;
		while (low < high&&data1[high] >= pivotkey) { compCount++; --high; }
		Shift(data1, data1, low, high);
		compCount++;
		while (low < high&&data1[low] <= pivotkey) { compCount++; ++low; }
		Shift(data1, data1, high, low);
	}
	Shift(data1, data1, low, 0);
	return low;

}

void QSort(int low, int high)//QuickSort�ĸ�������
{
	int pivotloc;
	if (low < high) {
		pivotloc = Partition(low, high);
		QSort(low, pivotloc - 1);
		QSort(pivotloc + 1, high);
	}
}

void QuickSort()//��������
{
	BeforeSort();
	QSort(1, Size);
	output();
}

void ShellSort()//ϣ������
{
	BeforeSort();
	int i, j, h;
	i = 4;
	h = 1;
	while (i <= Size) {
		i = i * 2;
		h = 2 * h + 1;
	}
	while (h != 0) {
		i = h;
		while (i <= Size) {
			j = i - h;
			while (j > 0 && Less(j + h, j)) {
				Swap(j, j + h);
				j = j - h;
			}
			i++;
		}
		h = (h - 1) / 2;
	}
	output();
}

void Sift(int left, int right)//������ĵ��Ѻ���
{
	int i, j, finished = 0;
	i = left;
	j = 2 * i;
	Shift(data1, data1, 0, left);
	Shift(data1, data1, MAXSIZE + 1, left);
	while (j <= right && !finished) {
		if (j < right&&Less(j, j + 1)) j = j + 1;
		if (!Less(0, j)) finished = 1;
		else {
			Shift(data1, data1, i, j);
			i = j;
			j = 2 * i;
		}
	}
	Shift(data1, data1, i, MAXSIZE + 1);
}

void HeapSort()//������
{
	int left, right;
	BeforeSort();
	for (left = Size / 2; left >= 1; left--) Sift(left, Size);
	for (right = Size; right >= 2; right--) {
		Swap(1, right);
		Sift(1, right - 1);
	}
	output();
}

void BInsertSort()//�۰��������
{
	BeforeSort();
	int i, low, high, m, j;
	for (i = 2; i <= Size; i++) {
		Shift(data1, data1, 0, i);
		low = 1;
		high = i - 1;
		while (low <= high)
		{
			m = (low + high) / 2;
			if (Less(0, m)) high = m - 1;
			else low = m + 1;
		}
		for (j = i - 1; j >= high + 1; j--) Shift(data1, data1, j + 1, j);
		Shift(data1, data1, high + 1, 0);
	}
	output();
}

void Binsort()//2-·��������
{
	BeforeSort();
	int i, k, j;
	int first, last;
	first = last = 1;
	Shift(R1, data1, 1, 1);
	for (i = 2; i <= Size; i++) {
		compCount++;
		if (data1[i] >= R1[1]) {
			compCount++;
			j = last;
			while (j >= 1 && R1[j] > data1[i]){
				Shift(R1, R1, j + 1, j);
				j--;
				compCount++;
			}
			Shift(R1, data1, j + 1, i);
			last++;
		}
		else {
			first--;
			if (first == 0) first = Size;
			j = first + 1;
			compCount++;
			while (j <= Size && R1[j] <= data1[i]){
				Shift(R1, R1, j - 1, j);
				j++;
				compCount++;
			}
			Shift(R1, data1, j - 1, i);
		}
	}
	k = 1;
	j = first;
	while (k <= Size) {
		Shift(data1, R1, k, j);
		k++;
		j = (j + 1) % (Size + 1);
		if (j == 0) j = j + 1;
	}
	output();
}

void Merge(int low, int m, int high)
{
	int i = low, j = m + 1, p = 1;
	while (i <= m && j <= high) {
		if (Less(i, j)) Shift(R1, data1, p++, i++);
		else Shift(R1, data1, p++, j++);
	}
	while (i <= m)
		Shift(R1, data1, p++, i++);
	while (j <= high)
		Shift(R1, data1, p++, j++);
	for (p = 1, i = low; i <= high; p++, i++)
		Shift(data1, R1, i, p);
}

void MSort(int low, int high)
{
	int mid;
	if (low < high) {
		mid = (low + high) / 2;
		MSort(low, mid);
		MSort(mid + 1, high);
		Merge(low, mid, high);
	}
}

void MergeSort()//�鲢����
{
	BeforeSort();
	MSort(1, Size);
	output();
}

void Distribute(node *a, int w)
{
	int i;
	for (i = 0; i < 10; i++) fr[i] = -1;
	for (i = head; i != -1; i = a[i].next) {
		int x = a[i].data3 / w % 10;
		if (fr[x] == -1) {
			fr[x] = re[x] = i;
			compCount++;
		}else {
			a[re[x]].next = i;
			re[x] = i;
			shiftCount++;
		}
	}
	for (i = 0; i < 10; i++)
		if (fr[i] != -1)a[re[i]].next = -1;
}

void Collect(node *a)
{
	int i, last = -1;
	for (i = 0; i < 10; i++)
		if (fr[i] != -1) {
			if (last == -1) {
				head = fr[i];
				last = re[i];
			}else {
				a[last].next = fr[i];
				last = re[i];
				shiftCount++;
			}
		}
	a[last].next = -1;
}

void RadixSort()//���������㷨��
{
	BeforeSort();
	ofstream out_stream;
	node* a;
	a = new node[Size];
	int i, j = 1;
	for (i = 0; i < Size; i++) {
		a[i].data3 = data1[i + 1];
		a[i].next = i + 1;
	}
	head = 0;
	a[Size - 1].next = -1;
	for (i = 1; i <= max; i *= 10) {
		Distribute(a, i);
		Collect(a);
	}
	cout << "\t" << compCount << "\t\t" << shiftCount << "\n";
	while (head != -1){
		data1[j++] = a[head].data3;
		head = a[head].next;
	}
	CopyData(data1, data2);
	cout << "\n";
	out_stream.open("output.txt", ios::app);
	out_stream << "\t" << compCount << "\t\t" << shiftCount << "\n\n";
	out_stream.close();
}

void Initialization()//ϵͳ��ʼ��
{
	system("cls");//����
	cout
		<< "*********************************************************************\n"
		<< "*                 ���ڲ������㷨�ıȽϡ�                            *\n"
		<< "*********************************************************************\n"
		<< "*               ��1����ϵͳ��������������                         *\n"
		<< "*               ��2���ֶ�����������                               *\n"
		<< "*               ��3���������˵�                                     *\n"
		<< "*               ��0���˳�����                                       *\n"
		<< "*                                                   v 2018.7.2      *\n"
		<< "*********************************************************************\n"
		<< endl << "������Ҫִ�еĲ��裺";
}

void Interpret(int cmd)//���ø����㷨
{
	int i, j, x = 2;
	ofstream out_stream;
	out_stream.open("output.txt", ios::app);
	if (out_stream.fail())
	{
		cout << "Output file opening failed.\n";
		exit(1);
	}
	switch (cmd) {
	case 1:
		out_stream << "��ϵͳ��������������ĸ����㷨�ıȽϴ������ƶ���������:\n";
		out_stream << "\tcompCount\tshiftCount\n";
		out_stream.close();
		cout << "������������ĳ���:";
		cin >> Size;
		RandomizeList();
		cout << "\t"; for (i = 1; i <= Size; i++) cout << data1[i] << " "; cout << "\n";
		cout << "��ϵͳ��������������ĸ����㷨�ıȽϴ������ƶ���������:\n";
		cout << "\tcompCount\tshiftCount\n";
		for (j = 0; j < SORTNUM; j++) {
			CopyData(data2, data1);
			out_stream.open("output.txt", ios::app);
			if (j == 0) { cout << "Bubbl: "; out_stream << "Bubbl: "; out_stream.close(); BubbleSort(); }
			if (j == 1) { cout << "Tnser: "; out_stream << "Tnser: "; out_stream.close(); InsertSort(); }
			if (j == 2) { cout << "Selec: "; out_stream << "Selec: "; out_stream.close(); SelectSort(); }
			if (j == 3) { cout << "Quick: "; out_stream << "Quick: "; out_stream.close(); QuickSort(); }
			if (j == 4) { cout << "Shell: "; out_stream << "Shell: "; out_stream.close(); ShellSort(); }
			if (j == 5) { cout << "Heap : "; out_stream << "Heap : "; out_stream.close(); HeapSort(); }
			if (j == 6) { cout << "BInse: "; out_stream << "BInse: "; out_stream.close(); BInsertSort(); }
			if (j == 7) { cout << "Merge: "; out_stream << "Merge: "; out_stream.close(); MergeSort(); }
			if (j == 8) { cout << "Bin : "; out_stream << "Bin : "; out_stream.close(); Binsort(); }
			if (j == 9) { cout << "Radix: "; out_stream << "Radix: "; out_stream.close(); RadixSort(); }
		}
		for (i = 1; i <= Size; i++) cout << data1[i] << " ";
		cout << "\n�������������";  while (x--)cin.get();
		Initialization();
		break;
	case 2:
		cout << "������������ĳ��ȣ�";
		cin >> Size;
		cout << "������" << Size << "������:\n";
		for (i = 1; i <= Size; i++) cin >> data1[i];
		CopyData(data1, data2);
		out_stream << "�ֶ�����������ĸ����㷨�ıȽϴ������ƶ���������:\n";
		out_stream << "\tcompCount\tshiftCount\n";
		out_stream.close();
		cout << "�ֶ�����������ĸ����㷨�ıȽϴ������ƶ���������:\n";
		cout << "\tcompCount\tshiftCount\n";
		for (j = 0; j < SORTNUM; j++) {
			CopyData(data2, data1);
			out_stream.open("output.txt", ios::app);
			if (j == 0) { cout << "Bubbl: "; out_stream << "Bubbl: "; out_stream.close(); BubbleSort(); }
			if (j == 1) { cout << "Tnser: "; out_stream << "Tnser: "; out_stream.close(); InsertSort(); }
			if (j == 2) { cout << "Selec: "; out_stream << "Selec: "; out_stream.close(); SelectSort(); }
			if (j == 3) { cout << "Quick: "; out_stream << "Quick: "; out_stream.close(); QuickSort(); }
			if (j == 4) { cout << "Shell: "; out_stream << "Shell: "; out_stream.close(); ShellSort(); }
			if (j == 5) { cout << "Heap : "; out_stream << "Heap : "; out_stream.close(); HeapSort(); }
			if (j == 6) { cout << "BInse: "; out_stream << "BInse: "; out_stream.close(); BInsertSort(); }
			if (j == 7) { cout << "Merge: "; out_stream << "Merge: "; out_stream.close(); MergeSort(); }
			if (j == 8) { cout << "Bin : "; out_stream << "Bin : "; out_stream.close(); Binsort(); }
			if (j == 9) { cout << "Radix: "; out_stream << "Radix: "; out_stream.close(); RadixSort(); }
		}
		for (i = 1; i <= Size; i++) cout << data1[i] << " ";
		cout << "\n�������������";  while (x--)cin.get();
		Initialization();
		break;
	case 0: break;
	default:Initialization(); break;
	}
}

void sort()
{
	Initialization();
	int cmd;
	do {
		cin >> cmd;
		Interpret(cmd);
	} while (cmd != 0);
}