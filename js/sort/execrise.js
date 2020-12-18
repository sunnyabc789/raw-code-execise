// 1.关于稳定性：

// 不稳定：快选堆希（快速排序、选择排序、堆排序、希尔排序）
// 稳    定：插冒归计基（简单插入排序、冒泡排序、归并排序、计数排序、基数排序）

// 2.关于移动次数和关键字顺序无关的排序
// 顺口溜：一堆（堆排序）海龟（归并排序）选（选择排序）基（基数排序）友

// nlogn  前面的n可以省略
// 排序方法        平均情况        最好情况        最坏情况        辅助空间        稳定性

// 冒泡排序         O(n ^ 2)           O(n)              O(n ^ 2)            O(1)                稳定

// 选择排序         O(n ^ 2)          O(n ^ 2)            O(n ^ 2)            O(1)              不稳定

// 插入排序         O(n ^ 2)           O(n)              O(n ^ 2)            O(1)                稳定

// 希尔排序O(n * log(n))~O(n ^ 2) O(n ^ 1.3)       O(n ^ 2)            O(1)              不稳定

// 堆排序          O(n * log(n))     O(n * log(n))    O(n * log(n))       O(1)              不稳定

// 归并排序       O(n * log(n))     O(n * log(n))    O(n * log(n))       O(n)                稳定

// 快速排序       O(n * log(n))     O(n * log(n))      O(n ^ 2)            O(nlogn)              不稳定
// 基数	n * k	n * k	n * k	n + k	稳定 k 基数大小  空间也是 kn

// 基数排序 vs 计数排序 vs 桶排序

// 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

// 基数排序：根据键值的每位数字来分配桶 计数排序：每个桶只存储单一键值 桶排序：每个桶存储一定范围的数值

function insertSort(arr) {
}
// 不稳定 快选堆希  
// 一堆乌龟选基友 
// 稳定 与初始状态有关 平均 On2 O1
console.log(insertSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function binarysort(arr) {
}
// 时间复杂度不好算 好时 nlogn  坏时趋近n2  平均 n2 空间复杂度 o1  与初始状态相关
console.log(binarysort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2  
//注意交换时是 j + d = j
//注意 j 不要重复声明
function shellsort(arr) {
}
// 不稳定 与初始状态有关 nlogn n2  o1
console.log(shellsort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
// 注意val 和 more的前后关系 val用来做基准 一定是夹在中间的
function quickSort(arr) {
}
// 不稳定 与初始状态有关
// nlogn n2 on
console.log(quickSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function buddleSort(arr) {
}
// 稳定 与初始状态有关 
// n2 o1
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]),'===')

//错了
function directSelectSort(arr) {
}
// 与初始状态无关 一堆乌龟选基友 不稳定 快选堆希  n2
console.log(directSelectSort([7, 3, 4, 5, 10, 7, 8, 2]))

function heapSort(arr) {
}
// 不稳定 与初始状态无关
// nlogn o1
console.log(heapSort([7, 3, 4, 5, 10, 7, 8, 2]))

function merge(left, right) {
}

function mergeSort(arr) {
}
// 稳定 相对快排的优势 与初始状态无关
// nlogn  on  费空间 但快排也费空间
console.log(mergeSort([7, 3, 4, 5, 10, 7, 8, 2]))


function radixSort(arr) {
}
// 稳定 与初始状态无关
// n*k n+k
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2, 103, 102, 52]))

