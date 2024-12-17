
8.jsondiff库
 https://github.com/andreyvit/json-diff
 function delUnuseFields(data) {
  const obj = _.cloneDeep(data);
  if (obj === null || typeof obj !== 'object') return obj;

  for (let key in obj) {
    if (key === 'id' || key === 'key') {
      delete obj[key];
    } else {
      obj[key] = delUnuseFields(obj[key]);
    }
  }

  return obj;
}
  const diffRes = jsondiff.diff(delUnuseFields(initValues), delUnuseFields(currentValues))

diffRes -> 
// 数组 [~ + -, value]
// 字段 {old: v, new: v}
{
    "childrenRuleTreeDTOList": [
        [
            "~",
            {
                "desc__added": "aqwer",
                "ruleConditionTree": {
                    "children": [
                        [
                            "~",
                            {
                                "children": [
                                    [
                                        " "
                                    ],
                                    [
                                        " "
                                    ],
                                    [
                                        " "
                                    ],
                                    [
                                        "-",
                                        {
                                            "right": [
                                                "0"
                                            ],
                                            "left": "order.packageWeight",
                                            "operator": ">"
                                        }
                                    ]
                                ]
                            }
                        ]
                    ]
                }
            }
        ],
        [
            " "
        ],
        [
            " "
        ],
      
    ],
    "ruleName": {
        "__old": "6 ",
        "__new": "1216ss"
    }
}




实践
```
export function diff({ state, nodeId, diffRes: _diffRes, index }) {
  const form = this.$(nodeId)?.getFormInstance?.();
  if (!form) return;
  form.readOnly = true

  let mode = state.__LowcodePageProps__.diffMode

  let diffRes = _diffRes;
  if (nodeId === 'node_ocm3r26cap4') {
    diffRes = diffRes?.[index]?.[1] || {}
  }

  
  const bgColorMap = {
    oldVersion: {
      '-': 'rgba(255, 0, 0, 0.2)',
      '+': '#c0dc91'
    },
    newVersion: {
      '-': '#c0dc91',
      '+': 'rgba(255, 0, 0, 0.2)'
    }
  }

  const filterCom = ['Card', 'CardSubCard', 'FormItemSlot']
  const arrayCom = ['ArraySubAreaCard', 'ArrayTable']
  const noNeedDiffFields = ['number'];
  // 字段配置
  const configs = this.$(nodeId).props.config.filter(i => !filterCom.includes(i.componentName))
  
  function normalFieldName(fieldName) {
    let res = fieldName
    res = res.replace('__deleted', '')
    res = res.replace('__added', '')
    return res
  }

  let syncHeight = {}

  // 新旧两个都要执行一遍  给各自的普通字段加颜色
  // 但是 高度同步 只需要晚渲染的一遍执行一次即可  右边的晚渲染
  configs.map(formItem => {
    const formItemName = formItem.name
    if (noNeedDiffFields.includes(formItemName)) return;
    let diffV = diffRes[formItemName] || diffRes[`${formItemName}__deleted`] || diffRes[`${formItemName}__added`]

    // 普通字段
    if (!arrayCom.includes(formItem.componentName)) {
      form.setFieldState(formItemName, (state) => {
        state.setDecoratorProps({
          style: {
            backgroundColor: diffV ? bgColorMap[mode]['-'] : '#fff'
          }
        })
      })
    } else {
      // 数组字段
      function handleArrayField({
        diffV = [],
        parentPath = '',
      }) {
        const arr = diffV.filter((item, idx) => item[0] !== versionSign[mode])

        // 给自增表格用的
        let shouldAddIdx = []
        let shouldDelIdx = []

        arr.map((subDiffFormItem, subIdx) => {
          // 这里只做加颜色逻辑  同步高度在另外一个循环遍历中处理

          // 同步高度
          if (formItem.componentName === 'ArraySubAreaCard' && mode === 'newVersion') {
            if (!syncHeight[parentPath]) {
              syncHeight[parentPath] = 1
            }
          }

          // 加颜色
          if (subDiffFormItem[0] === '-') {
            // 可编辑表格 form.fields 没创建 xx.0  这种   只有自增卡片创建了 
            if (!form.query(`${parentPath}.${subIdx}`).value()) {
              shouldDelIdx.push(subIdx)
              form.setFieldState(`${parentPath}`, (state) => {

                state.setComponentProps({
                  // rc-table才有用 fusiontable不行
                  rowClassName: (record, index) => {
                    if (shouldDelIdx.includes(index)) {
                      return "hasDelArrayTableRow"
                    }
                  }
                })
              })

              return
            }

            form.setFieldState(`${parentPath}.${subIdx}`, (state) => {
              state.setComponentProps({
                className: 'hasDeleteGroup'
              })
            })
          }

          // 加颜色
          if (subDiffFormItem[0] === '+') {

            // 可编辑表格 form.fields 没创建 xx.0  这种   只有自增卡片创建了 
            if (!form.query(`${parentPath}.${subIdx}`).value()) {
              shouldAddIdx.push(subIdx)
              form.setFieldState(`${parentPath}`, (state) => {

                state.setComponentProps({
                  // rc-table才有用 fusiontable不行
                  rowClassName: (record, index) => {
                    if (shouldAddIdx.includes(index)) {
                      return 'hasCreateArrayTableRow'
                    }
                  }
                })
              })

              return
            }

            form.setFieldState(`${parentPath}.${subIdx}`, (state) => {
              state.setComponentProps({
                className: 'hasCreateGroup'
              })
            })

          }


          if (subDiffFormItem[0] === '~') {

            // 自增卡片 自增表格 都会进这里
            Object.keys(subDiffFormItem[1]).map(subFormItemName => {
              subFormItemName = normalFieldName(subFormItemName)
              const subFormItemFieldPath = `${parentPath}.${subIdx}.${subFormItemName}`
              const subFormItemField = form.fields[form.query(subFormItemFieldPath)?.addresses?.[0]]
              if (!subFormItemField) return
              const subFormItemComName = subFormItemField?.componentType

              if (subFormItemComName === "RuleTree") {
                form.setFieldState(subFormItemFieldPath, (state) => {
                  state.setComponentProps({
                    style: {
                      backgroundColor: bgColorMap[mode]['-']
                    }
                  })
                })
                return
              }

              // 目前只有自增卡片套自增表格会进来
              if (Array.isArray(subFormItemField.value) && arrayCom.includes(subFormItemComName)) {
                handleArrayField({
                  diffV: subDiffFormItem[1][subFormItemName],
                  parentPath: subFormItemFieldPath
                })
                return
              }

              // 目前只有自增表格会进来
              form.setFieldState(subFormItemFieldPath, (state) => {
                state.setDecoratorProps({
                  style: {
                    backgroundColor: bgColorMap[mode]['-']
                  }
                })
              })
            })
          }
        })
      }
      // 数组字段 回填没那么快 要延时一下
      handleArrayField({
        diffV,
        parentPath: formItemName
      })
    } 

  })

  if (mode === 'oldVersion') return
  // 增高逻辑 只需要执行一次
  loop(() => {
    if (!window.newVersiont?.$) return false
    if (!window.oldVersiont?.$) return false
    // // 同步高度
    if (Object.keys(syncHeight).length && mode === 'newVersion') {
      Object.keys(syncHeight).map(key => {
        const arrFields = _.get(diffRes, key)
        if (!arrFields) return

        let oldHeight = 0
        let newHeight = 0
        let oldArr = []
        let newArr = []
        arrFields.map((item, idx) => {
          if (item[0] === '+') {
            newArr.push(idx)
            const targetIdx = newArr.length - 1
            oldHeight += newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[targetIdx].clientHeight + 12
          }

          if (item[0] === '-') {
            oldArr.push(idx)
            const targetIdx = oldArr.length - 1
            newHeight += oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[targetIdx].clientHeight + 12

          }


          if (item[0] === ' ' || item[0] === '~') {
            oldArr.push(idx)
            newArr.push(idx)

            if (oldHeight > 0 && newHeight > 0) {

              if (oldHeight < newHeight) {
                const targetIdx = oldArr.length - 1
                const cH = newHeight - oldHeight
                window.newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelector('.card-sub-card-content .form-grid--cols-1').children[targetIdx].style.marginTop = `${cH}px`

              } else {
                const targetIdx = oldArr.length - 1
                const cH = oldHeight - newHeight
                window.oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelector('.card-sub-card-content .form-grid--cols-1').children[targetIdx].style.marginTop = `${cH}px`
              }

              oldHeight = 0
              newHeight = 0

            }

            if (oldHeight > 0) {
              const targetIdx = oldArr.length - 1
              window.oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelector('.card-sub-card-content .form-grid--cols-1').children[targetIdx].style.marginTop = `${oldHeight}px`
              oldHeight = 0
            }

            if (newHeight > 0) {
              const targetIdx = newArr.length - 1
              window.newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelector('.card-sub-card-content .form-grid--cols-1').children[targetIdx].style.marginTop = `${newHeight}px`
              newHeight = 0
            }

          }

          if (item[0] === '~') {

            const oldTargetIdx = oldArr.length - 1
            const newTargetIdx = newArr.length - 1
            if (oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[oldTargetIdx].clientHeight > newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[newTargetIdx].clientHeight) {
              newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[newTargetIdx].style.height = oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[oldTargetIdx].clientHeight + 'px'

            } else {
              oldVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[oldTargetIdx].style.height = newVersiont.$('')._reactInternalFiber.return.return.return.stateNode.querySelectorAll('.formily-array-sub-area-card-item')[newTargetIdx].clientHeight + 'px'
            }
          }
        })
      })
    }

    const ruleTreeContainers = document.querySelectorAll('.drawer-body .ruleTreeContainer');
    let maxHeight = 0;
    ruleTreeContainers.forEach(c => {
      const currentHeight = c.clientHeight;
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    });
    ruleTreeContainers.forEach(c => {
      c.style.height = `${maxHeight}px`;
    });

    setTimeout(() => {
      window.t.setState({
        priorityConFirmSubmitDrawerLoading: false
      })
    })
    return true
  }, 0)

}
```