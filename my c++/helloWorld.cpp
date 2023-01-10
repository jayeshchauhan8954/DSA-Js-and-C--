#include <iostream>
using namespace std;

int main(){
    int a = 123;
    cout << a << endl;

    char b = 'v';
    cout << b << endl;

    bool bl = true;
    cout << bl << endl;

    float f = 1.234;
    cout << f << endl;

    double d = 1.234567;
    cout << d << endl;

    int size_a = sizeof(a);
    cout << "size of a is : " << size_a << endl;
    int size_f = sizeof(f);
    cout << "size of f is : " << size_f << endl;
    int size_b = sizeof(b);
    cout << "size of b is : " << size_b << endl;
    int size_bl = sizeof(bl);
    cout << "size of bl is : " << size_bl << endl;
    int size_d = sizeof(d);
    cout << "size of d is : " << size_d << endl;
}