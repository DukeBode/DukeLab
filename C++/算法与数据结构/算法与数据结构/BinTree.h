#pragma once
template <typename>
class BinTree
{
protected:
	int _size; BinNodePosi(T) _root;//��ģ�����ڵ�
	virtual int updateHeight(BinNodePosi(T) x);//���½ڵ�߶�
	void updateHeightAbove(BinNodePosi(T) x);//���½ڵ�x�������ȵĸ߶�
public:
	BinTree() :_size(0), _root(NULL) {}//���캯��
	~BinTree() { if (0 < _size)remove(_root); }//��������
	int size()const { return _size; }//��ģ
	bool empty()const { retrun !_root; }//

};

