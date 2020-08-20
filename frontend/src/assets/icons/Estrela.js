import React from 'react'

const Estrela = (props) => (
    <svg width="50" height="50" fill="none" version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path fill={props.color} d="m25.1 7.4062c-0.50403-0.033102-1.0187 0.17984-1.4277 0.54883-0.4075 0.36763-0.74717 0.88361-1.0566 1.5723-0.00115 0.0025599-0.002756 0.0032945-0.003906 0.0058593l-3.373 6.8008-0.005859 0.015625c-0.19449 0.44491-0.41784 0.77606-0.6582 0.97852s-0.49126 0.30859-0.91406 0.30859h-6.7031c-0.91389 0-1.6344 0.12528-2.2109 0.38281-0.57655 0.25753-1.015 0.68165-1.209 1.1953-0.38789 1.0273 0.15554 2.0478 0.91016 2.7246l-0.041016-0.039062 5.3906 5.6367 0.005859 0.00586c0.38551 0.38551 0.74983 0.6929 0.95703 1.0781 0.2072 0.38523 0.32489 0.85336 0.068359 1.7617l-0.001953 0.003907-2.166 8.084c-0.29722 0.90112-0.47234 1.6078-0.50781 2.2031-0.018051 0.30292-0.003157 0.58244 0.085937 0.86133s0.27946 0.564 0.55078 0.73438c0.54264 0.34075 1.1095 0.21818 1.6445 0.033203 0.53272-0.18418 1.1142-0.48933 1.7871-0.88867l7.1074-4.1035c0.98173-0.5668 1.4433-0.73728 1.7637-0.72852 0.30298 0.008291 0.74968 0.2123 1.5723 0.68164 0.004087 0.002332 0.005659 0.003513 0.009766 0.005859a0.74476 0.74476 0 0 0 0.058594 0.039063l7.0156 4.1016c0.67659 0.40192 1.2599 0.70759 1.7949 0.89258 0.53504 0.18499 1.1019 0.30752 1.6445-0.033203 0.27132-0.17036 0.46168-0.45549 0.55078-0.73438s0.10399-0.55841 0.085938-0.86133c-0.036101-0.60584-0.21254-1.3218-0.51953-2.2461l-2.1543-8.041-0.001953-0.003907c-0.25653-0.9084-0.13886-1.3765 0.068359-1.7617 0.20621-0.38337 0.56972-0.6894 0.95312-1.0723l5.0137-4.9238c0.91283-0.89613 1.5397-1.9841 1.3262-3.1172-0.10675-0.56656-0.48665-1.098-1.0371-1.4141s-1.2437-0.45508-2.1016-0.45508h-6.5371a0.74476 0.74476 0 0 0-0.21484-0.011719c-0.57565 0.053045-1.0998-0.21051-1.6797-0.81445s-1.1407-1.5232-1.6289-2.5215c-0.48817-0.99824-0.90986-2.0714-1.2715-3-0.35229-0.90458-0.61618-1.6229-0.93359-2.1484-0.38558-0.87426-1.0157-1.6713-2.0059-1.7363zm-0.097656 1.4863c0.12647 0.0083057 0.49928 0.26959 0.76172 0.88086l0.023437 0.052734 0.029297 0.046875c0.14923 0.23966 0.47122 1.0275 0.83398 1.959 0.36276 0.93147 0.79822 2.0417 1.3223 3.1133 0.52404 1.0716 1.1309 2.1071 1.8926 2.9004 0.66912 0.69688 1.5158 1.2259 2.4824 1.2734a0.74476 0.74476 0 0 0 0.10547 0.007812h6.918c0.68628 0 1.1271 0.12641 1.3594 0.25977 0.23227 0.13336 0.28353 0.23432 0.31445 0.39844 0.061847 0.32824-0.21012 1.0959-0.9043 1.7773l-5.0176 4.9258-0.001953 0.001953c-0.29782 0.29782-0.83673 0.72284-1.2148 1.4258-0.37696 0.7008-0.52606 1.6741-0.19336 2.8613l0.001953 0.005859c4e-4 0.001422-4.02e-4 0.002484 0 0.003906l2.168 8.0898 0.007813 0.021485c0.286 0.8611 0.42344 1.4962 0.44531 1.8633 0.007668 0.12869-0.00351 0.1715-0.011719 0.22461 0.016582-0.019024-0.003462 0.008298-0.29297-0.091797-0.35884-0.12406-0.88738-0.38894-1.5215-0.76562l-0.003907-0.001953-6.8984-4.0312a0.74476 0.74476 0 0 0-0.083984-0.058594c-0.93433-0.53963-1.58-0.92313-2.3906-0.94531-0.81065-0.022184-1.5195 0.33343-2.5488 0.92773l-7.1113 4.1074-0.005859 0.001953c-0.63416 0.37668-1.1607 0.64156-1.5195 0.76562-0.28986 0.10021-0.31187 0.072631-0.29492 0.091797-0.00821-0.053121-0.019388-0.095908-0.011719-0.22461 0.021877-0.36713 0.15933-1.0022 0.44531-1.8633l0.007812-0.021485 2.168-8.0898v-0.003906c0.33511-1.1902 0.18624-2.1651-0.19141-2.8672-0.37476-0.69675-0.90366-1.1166-1.2031-1.4141l-0.011719-0.011719-5.3926-5.6406-0.021484-0.017578c-0.45183-0.40526-0.58865-0.88609-0.51172-1.0898 0.038467-0.10188 0.11827-0.22679 0.42383-0.36328 0.30556-0.13649 0.83103-0.25195 1.6035-0.25195h6.7031c0.731 0 1.386-0.24996 1.873-0.66016s0.81384-0.94624 1.0645-1.5195l3.3672-6.791 0.005859-0.013672c0.25415-0.56702 0.51144-0.91263 0.69922-1.082s0.2688-0.17212 0.33203-0.16797z" />
    </svg>

)

export default Estrela