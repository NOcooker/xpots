set -e
echo "Enter test file: "
read NAME

if [[ "$NAME" = "" ]];then
  echo "test all!!!"
  # 如果未指定文件名，全量测试
  jest --config jestconfigS.json --testPathPattern="(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
else
  echo "test one!!!"
  # 如果指定了文件名，单个测试
  jest --config jestconfigS.json --testNamePattern="$NAME"
fi
