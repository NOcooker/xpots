set -e
echo "Enter test file: "
read NAME

if ["$NAME" = ""];then
  # 如果未指定文件名，全量测试
  jest --config jestconfigS.json --testPathPattern="(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
else
  # 如果指定了文件名，单个测试
  jest --config jestconfigS.json --testNamePattern="$NAME"
fi
