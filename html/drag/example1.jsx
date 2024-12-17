function imageContainer(props, comRef) {
    const css = `
    tr {
      background: #fff;
      color: #333;
    }
  `
  // 拖拽时有个图片 是可以指定的 当拖拽表格行时 最好时另外准备一个表格 例如这个
  return (
    <div
      ref={comRef}
      style={{
        width: '650px',
        position: 'fixed',
        left: '99999px'
      }}
    >
      <style>
        {css}
      </style>
      <table 
        style={{
          height: '100%'
        }}
      >
        <colgroup>
          <col style={{ minWidth: 200 }} />
          <col width={100} />
          <col width={50} />
          <col width={50} />
        </colgroup>
        <tbody></tbody>
      </table>
    </div>
  )
}

function Table() {
    return (
        <Table
            onDragEnd={(e) => {
                comRef.current.querySelector('tbody').innerHTML = '';
            }}
            onDragStart={(e) => {
                comRef.current.querySelector('tbody').innerHTML = '';
                if (state.summaryTable?.__selectedRowKeys__?.length) {
                    let doms = [...document.getElementsByClassName('filterTarget')[0].querySelectorAll('.dataTr')].slice(0)[0]
                    doms.forEach((i, idx) => {
                        if (!i.className.includes('highlight-cell')) return; // 选中行带类名highlight-cell
                        comRef.current
                            .querySelector('tbody').appendChild(filterChildren(i))
                    });
                } else {
                   comRef.current.querySelector('tbody').appendChild(filterChildren(e.target))
                }

                e.dataTransfer.setDragImage(comRef.current, 0, 0);

                e.dataTransfer.setData('data', JSON.stringify({
                    type: 'leftTableAdd',
                    records: state.summaryTable?.__selectedRowRecords__?.length ? state.summaryTable.__selectedRowRecords__ : [record]
                }))
            }}
        />
    )
}